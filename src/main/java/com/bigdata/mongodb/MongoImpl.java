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
    public SituationStatisticsReport getPlayStats(int down, int togo_start, int togo_end, int ydline_start, int ydline_end, String team) {
        BasicDBObject query = buildBasicQuery(down, togo_start, togo_end, ydline_start, ydline_end, team);

        //> db.playbyplay.aggregate([
        //  {$match   : { "down" : 4 , "togo" : { "$lte" : 10 , "$gt" : 0} , "ydline" : { "$lte" : 3 , "$gt" : 0} }},
        // { "$match" : { "down" : 1 , "togo" : { "$lte" : 10 , "$gt" : 5} , "ydline" : { "$lte" : 80 , "$gt" : 70}}}
        // { "$group" : { "_id" : "$play-choice" , "count" : { "$sum" : "1"}}}
        // { $group   : {_id: "$play-choice",       count: { $sum: 1      }}}
        // ])
        BasicDBObject match1 = new BasicDBObject("$match", query);
        BasicDBObject group = new BasicDBObject("$group", new BasicDBObject("_id", "$play-choice")
                .append("count", new BasicDBObject("$sum", 1)));

        System.out.println(match1 + "\n" + group);
        AggregationOutput output1 = collection.aggregate(Arrays.asList(new DBObject[]{match1, group}));
        Iterator<DBObject> iterator = output1.results().iterator();
        //{ "_id" : "SPIKE", "count" : 2 }
        //{ "_id" : "SACK", "count" : 9 }
        //{ "_id" : "RUN OTHER", "count" : 28 }
        //{ "_id" : "KNEEL", "count" : 1 }
        //{ "_id" : "FIELD GOAL", "count" : 661 }
        //{ "_id" : "PASS INCOMPLETE", "count" : 83 }
        //{ "_id" : "RUN LEFT", "count" : 78 }
        //{ "_id" : "RUN RIGHT", "count" : 82 }
        //{ "_id" : "PASS", "count" : 100 }
        //{ "_id" : "RUN MIDDLE", "count" : 107 }

        String title = Utilities.getStatsTitle(down, togo_start, togo_end, ydline_start, ydline_end, team);
        HashMap<String, Integer> playCounts = new HashMap<>();
        while (iterator.hasNext()) {
            DBObject obj = iterator.next();
            System.out.println(obj);
            playCounts.put((String) obj.get("_id"), (Integer) obj.get("count"));
        }
        /*
        {
            "playCounts":{"query":0},
            "title":"Coach decisions when faced with First Down and 10 to 5 yards to go, bewteen their Own 20 and their Own 30"}
         */

        System.out.println(playCounts);
        return new SituationStatisticsReport(title, playCounts);
    }

    private long timeCount(BasicDBObject query) {
        long startTime = System.currentTimeMillis();
        long count = collection.count(query);
        System.out.println("Elapsed time: " + (System.currentTimeMillis() - startTime) + "\t" + query);
        return count;
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
