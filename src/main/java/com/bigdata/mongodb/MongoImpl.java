package com.bigdata.mongodb; /**
 * Created by test on 4/9/15.
 */
import com.bigdata.DataReporting.ExpectationsStatisticsReport;
import com.bigdata.DataReporting.SituationStatisticsReport;
import com.bigdatanfl.server.Utilities;
import com.mongodb.*;

import java.net.UnknownHostException;
import java.util.Arrays;


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

    private BasicDBObject buildBasicQuery(int down, int togo, int ydline, String team) {
        BasicDBObject query = new BasicDBObject();

        if (down == 0) //Extra point or kickoff
            query.put("down", "");
        else {//Normal case
            query.put("down", down);
            query.put("togo", togo);
            query.put("ydline", new BasicDBObject("$lte", ydline).append("$gt", (ydline - 10)));
        }

        if (!team.equals("ANY"))
            query.append("off", team);

        return query;
    }

    @Override
    public SituationStatisticsReport getPlayStats(int down, int togo, int ydline, String team) {
        BasicDBObject query = buildBasicQuery(down, togo, ydline, team);

        BasicDBObject passQuery = (BasicDBObject) query.append("play-choice", "PASS").copy();
        BasicDBObject incompletePassQuery = (BasicDBObject) query.append("play-choice", "PASS INCOMPLETE").copy();
        BasicDBObject fieldGoalQuery = (BasicDBObject) query.append("play-choice", "FIELD GOAL").copy();
        BasicDBObject extraPointQuery = (BasicDBObject) query.append("play-choice", "EXTRA POINT").copy();
        BasicDBObject runMiddleQuery = (BasicDBObject) query.append("play-choice", "RUN MIDDLE").copy();
        BasicDBObject runLeftQuery = (BasicDBObject) query.append("play-choice", "RUN LEFT").copy();
        BasicDBObject runRightQuery = (BasicDBObject) query.append("play-choice", "RUN RIGHT").copy();
        BasicDBObject runOtherQuery = (BasicDBObject) query.append("play-choice", "RUN OTHER").copy();
//        BasicDBObject fumbleQuery = (BasicDBObject) query.append("play-choice", "FUMBLE").copy();
        BasicDBObject puntQuery = (BasicDBObject) query.append("play-choice", "PUNT").copy();
        BasicDBObject spikeQuery = (BasicDBObject) query.append("play-choice", "SPIKE").copy();

        long totalPlays = timeCount(query);
        long passPlays = timeCount(passQuery);
        long incompletePassPlays = timeCount(incompletePassQuery);
        long fieldGoalPlays = timeCount(fieldGoalQuery);
        long extraPointPlays = timeCount(extraPointQuery);
        long runMiddlePlays = timeCount(runMiddleQuery);
        long runLeftPlays = timeCount(runLeftQuery);
        long runRightPlays = timeCount(runRightQuery);
        long runOtherPlays = timeCount(runOtherQuery);
        long puntPlays = timeCount(puntQuery);
        long spikePlays = timeCount(spikeQuery);

        return new SituationStatisticsReport(Utilities.getStatsTitle(down, togo, ydline, team),
                                            totalPlays,
                                            passPlays,
                                            incompletePassPlays,
                                            fieldGoalPlays,
                                            extraPointPlays,
                                            runMiddlePlays,
                                            runLeftPlays,
                                            runRightPlays,
                                            runOtherPlays,
                                            puntPlays,
                                            spikePlays);
    }

    private long timeCount(BasicDBObject query) {
        long startTime = System.currentTimeMillis();
        long count = collection.count(query);
        System.out.println(query);
        System.out.println("Elapsed time: " + (System.currentTimeMillis() - startTime) + "\t" + query);
        return count;
    }

    @Override
    public ExpectationsStatisticsReport getPlayExpectations(int down, int togo, int ydline, String team, String play1, String play2) {
        BasicDBObject query = buildBasicQuery(down, togo, ydline, team);

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

        return new ExpectationsStatisticsReport(Utilities.getExpectationsTitle(down, togo, ydline, team, play1),
                Utilities.getExpectationsTitle(down, togo, ydline, team, play2),
                avgYards1,
                avgPoints1,
                avgYards2,
                avgPoints2);
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
