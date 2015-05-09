package com.bigdata.mongodb; /**
 * Created by test on 4/9/15.
 */
import com.bigdata.DataReporting.ExpectationsStatisticsReport;
import com.bigdata.DataReporting.SituationStatisticsReport;
import com.bigdatanfl.server.Utilities;
import com.mongodb.*;

import java.net.UnknownHostException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;


public class MongoImpl implements MongoDBInterface {
    private final MongoClient mongoClient;
    private final DB db;
    private final DBCollection collection;

    public MongoImpl() {
        mongoClient = getMongoClient("localhost", 27017);
        db = mongoClient.getDB( "nfl" );
        collection = db.getCollection("playbyplay");
    }
    @Override
    public DBCursor testGet() {
        return collection.find();
    }

    private BasicDBObject buildBasicQuery(int down, int togo_start, int togo_end, int ydline_start, int ydline_end, String team) {
        BasicDBObject query = new BasicDBObject();

        if (down == 0) //Extra point or kickoff
            query.put("down", "");
        else {//Normal case
            query.put("down", down);
            query.put("togo", new BasicDBObject("$lte", togo_start).append("$gt", togo_end));
            query.put("ydline", new BasicDBObject("$lte", ydline_start).append("$gt", ydline_end));
        }

        if (!team.equals("ANY"))
            query.append("off", team);

        return query;
    }

    @Override
    public SituationStatisticsReport getPlayStats(int down, int togo_start, int togo_end, int ydline_start, int ydline_end, String team, boolean collapseRuns) {
        BasicDBObject query = buildBasicQuery(down, togo_start, togo_end, ydline_start, ydline_end, team);

        BasicDBObject match1 = new BasicDBObject("$match", query);
        BasicDBObject group = new BasicDBObject("$group", new BasicDBObject("_id", "$play-choice")
                .append("count", new BasicDBObject("$sum", 1))
                .append("avgYards", new BasicDBObject("$avg", "$yards-gained"))
                .append("avgPoints", new BasicDBObject("$avg", "$points-scored")));

        System.out.println(match1 + "\n" + group);
        AggregationOutput output1 = collection.aggregate(Arrays.asList(new DBObject[]{match1, group}));
        Iterator<DBObject> iterator = output1.results().iterator();

        String title = Utilities.getStatsTitle(down, togo_start, togo_end, ydline_start, ydline_end, team);
        HashMap<String, Integer> playCounts = new HashMap<>();
        HashMap<String, String> avgYards = new HashMap<>();
        HashMap<String, String> avgPoints = new HashMap<>();
        while (iterator.hasNext()) {
            DBObject obj = iterator.next();
//            System.out.println(obj);
            int playCount = (Integer) obj.get("count");
            String key = (String) obj.get("_id");

            if (key == null)
                continue;

            String modKey = key;
            int oldCount = 0;
            if (collapseRuns) {
                if (contains(new String[]{"RUN LEFT", "RUN RIGHT"}, key)) {
                    modKey = "RUN OUTSIDE";
                    if (playCounts.containsKey("RUN OUTSIDE"))
                        oldCount = playCounts.get("RUN OUTSIDE");
                }
                if (contains(new String[]{"RUN MIDDLE", "RUN OTHER"}, key)) {
                    modKey = "RUN MIDDLE";
                    if (playCounts.containsKey("RUN MIDDLE"))
                        oldCount = playCounts.get("RUN MIDDLE");
                }
            }
            playCounts.put(modKey, playCount + oldCount);


            if (!(key.equals("null") || key.equals("FUMBLE"))) {
                double avgYardVal = (double) obj.get("avgYards");
                double avgPointVal = (double) obj.get("avgPoints");

                Object[] result = collapseRows(playCounts, avgYards, avgPoints, avgYardVal, avgPointVal, playCount, key, "PASS", new String[]{"PASS", "PASS INCOMPLETE"});
                avgYardVal = (double) result[0];
                avgPointVal = (double) result[1];
                key = (String) result[2];

                if (collapseRuns) {
                    result = collapseRows(playCounts, avgYards, avgPoints, avgYardVal, avgPointVal, playCount, key, "RUN OUTSIDE", new String[]{"RUN LEFT", "RUN RIGHT"});
                    avgYardVal = (double) result[0];
                    avgPointVal = (double) result[1];
                    key = (String) result[2];

                    result = collapseRows(playCounts, avgYards, avgPoints, avgYardVal, avgPointVal, playCount, key, "RUN MIDDLE", new String[]{"RUN MIDDLE", "RUN OTHER"});
                    avgYardVal = (double) result[0];
                    avgPointVal = (double) result[1];
                    key = (String) result[2];
                }

                avgYards.put(key, Utilities.toString(avgYardVal));
                avgPoints.put(key, Utilities.toString(avgPointVal));
            }
        }

        return new SituationStatisticsReport(title, playCounts, avgYards, avgPoints);
    }

    private Object[] collapseRows(HashMap<String, Integer> playCounts,
                                  HashMap<String, String> avgYards,
                                  HashMap<String, String> avgPoints,
                                  double avgYardVal,
                                  double avgPointVal,
                                  int playCount,
                                  String key, String reduceTo, String[] strings) {
        if (contains(strings, key)) {
            double newCount = playCount;
            double oldCount = 0;
            if (!key.equals(reduceTo) && playCounts.containsKey(reduceTo))
                oldCount = playCounts.get(reduceTo);
//            System.out.println(newCount + ", " + oldCount + ", " + key);
            key = reduceTo;

            double oldAvgYard = 0;
            double oldAvgPoint = 0;
            if (avgYards.containsKey(reduceTo)) {
                oldAvgYard = Double.parseDouble(avgYards.get(reduceTo));
                oldAvgPoint = Double.parseDouble(avgPoints.get(reduceTo));
            }
//            System.out.println(oldAvgYard + ", " + avgYardVal);
            avgYardVal = (oldAvgYard * oldCount + avgYardVal * newCount) / (oldCount + newCount);
            avgPointVal = (oldAvgPoint * oldCount + avgPointVal * newCount) / (oldCount + newCount);
//            System.out.println(avgYardVal);
        }
//        if (key.equals("PASS INCOMPLETE") && avgPoints.containsKey("PASS")) {
//            key = "PASS";
//            double oldAvgYard = Double.parseDouble(avgYards.get("PASS"));
//            double oldAvgPoint = Double.parseDouble(avgPoints.get("PASS"));
//            double passCount = playCounts.get("PASS");
//            double incompleteCount = playCounts.get("PASS INCOMPLETE");
//
//            avgYardVal = (oldAvgYard * passCount + avgYardVal * incompleteCount) / (passCount + incompleteCount);
//            avgPointVal = (oldAvgPoint * passCount + avgPointVal * incompleteCount) / (passCount + incompleteCount);
//        }
//        else if (key.equals("PASS") && avgPoints.containsKey("PASS INCOMPLETE")) {
//            double oldAvgYard = Double.parseDouble(avgYards.get("PASS INCOMPLETE"));
//            double oldAvgPoint = Double.parseDouble(avgPoints.get("PASS INCOMPLETE"));
//            double passCount = playCounts.get("PASS");
//            double incompleteCount = playCounts.get("PASS INCOMPLETE");
//
//            avgYardVal = (oldAvgYard * incompleteCount + avgYardVal * passCount) / (passCount + incompleteCount);
//            avgPointVal = (oldAvgPoint * incompleteCount + avgPointVal * passCount) / (passCount + incompleteCount);
//            avgPoints.remove("PASS INCOMPLETE");
//            avgYards.remove("PASS INCOMPLETE");
//        }
        return new Object[]{avgYardVal, avgPointVal, key};
    }

    private boolean contains(String[] array, String value) {
        for (String string : array)
            if (value.equals(string))
                return true;
        return false;
    }

    @Override
    public ExpectationsStatisticsReport getPlayExpectations(int down, int togo_start, int togo_end, int ydline_start, int ydline_end, String team, String play1, String play2) {
        BasicDBObject query = buildBasicQuery(down, togo_start, togo_end, ydline_start, ydline_end, team);

        BasicDBObject query1 = (BasicDBObject) query.append("play-choice", new BasicDBObject("$in", Utilities.toPlayChoice(play1))).copy();
        BasicDBObject query2 = (BasicDBObject) query.append("play-choice", new BasicDBObject("$in", Utilities.toPlayChoice(play2))).copy();

        //> db.playbyplay.aggregate([
        //      {$match: { "down" : 2 , "togo" : 10 , "ydline" : { "$lte" : 80 , "$gt" : 70} , "play-choice" : "PASS"}},
        //      {$group: {_id: "query", avgYards: {$avg: "$yards-gained"}, avgPoints: {$avg: "$points-scored"}}}] )
        BasicDBObject match1 = new BasicDBObject("$match", query1);
        BasicDBObject match2 = new BasicDBObject("$match", query2);
        BasicDBObject group = new BasicDBObject("$group", new BasicDBObject("_id", "query")
                .append("avgYards", new BasicDBObject("$avg", "$yards-gained"))
                .append("avgPoints", new BasicDBObject("$avg", "$points-scored")));

        System.out.println(match1 + "\n" + group);
        System.out.println(match2 + "\n" + group);
        AggregationOutput output1 = collection.aggregate(Arrays.asList(new DBObject[]{match1, group}));
        AggregationOutput output2 = collection.aggregate(Arrays.asList(new DBObject[]{match2, group}));

        double avgYards1 = 0;
        double avgYards2 = 0;
        double avgPoints1 = 0;
        double avgPoints2 = 0;
        if (output1.results().iterator().hasNext()) {
            avgYards1 = (double) output1.results().iterator().next().get("avgYards");
            avgPoints1 = (double) output1.results().iterator().next().get("avgPoints");
        }
        if (output2.results().iterator().hasNext()) {
            avgYards2 = (double) output2.results().iterator().next().get("avgYards");
            avgPoints2 = (double) output2.results().iterator().next().get("avgPoints");
        }
        int match1Count = (int) collection.count(query1);
        int match2Count = (int) collection.count(query2);

        return new ExpectationsStatisticsReport(Utilities.getExpectationsTitle(down, togo_start, togo_end, ydline_start, ydline_end, team, play1),
                Utilities.getExpectationsTitle(down, togo_start, togo_end, ydline_start, ydline_end, team, play2),
                avgYards1,
                avgPoints1,
                avgYards2,
                avgPoints2,
                match1Count,
                match2Count);
    }


    protected MongoClient getMongoClient(String url, int port) {
        MongoClient mongoClient = null;
        try {
            mongoClient = new MongoClient( url, port );
        } catch (UnknownHostException e) {
            e.printStackTrace();
        }
        return mongoClient;
    }
}
