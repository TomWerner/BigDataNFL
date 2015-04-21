package com.bigdata.mongodb; /**
 * Created by test on 4/9/15.
 */
import com.bigdata.DataReporting.ExpectationsStatisticsReport;
import com.bigdata.DataReporting.SituationStatisticsReport;
import com.bigdatanfl.server.Utilities;
import com.mongodb.*;

import java.net.UnknownHostException;


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

    @Override
    public SituationStatisticsReport getPlayStats(int down, int togo, int ydline, String team) {
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
        System.out.println("Elapsed time: " + (System.currentTimeMillis() - startTime) + "\t" + query);
        return count;
    }

    @Override
    public ExpectationsStatisticsReport getPlayExpectations(int down, int togo, int ydline, String team, String play) {
        //TODO: FIX THIS!!
        return null;
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
