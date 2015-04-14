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
        else //Normal case
            query.put("down", down);

        if (togo <= 10) //Normal case
            query.put("togo", togo);
        else //11+ yards
            query.put("togo", new BasicDBObject("$gt", togo));
        query.put("ydline", new BasicDBObject("$lte", ydline).append("$gt", (ydline - 10)));

        BasicDBObject passQuery = (BasicDBObject) query.append("$text", new BasicDBObject("$search", "pass")).copy();
        BasicDBObject incompletePassQuery = (BasicDBObject) query.append("$text", new BasicDBObject("$search", "incomplete")).copy();
        BasicDBObject fieldGoalQuery = (BasicDBObject) query.append("$text", new BasicDBObject("$search", "\"field goal\"")).copy();
        BasicDBObject extraPointQuery = (BasicDBObject) query.append("$text", new BasicDBObject("$search", "\"extra point\"")).copy();
        long time = System.currentTimeMillis();
        long totalPlays = collection.count(query);
        System.out.println("TotalPlays query time: " + (System.currentTimeMillis() - time));

        time = System.currentTimeMillis();
        long passPlays = collection.count(passQuery);
        System.out.println("PassPlays query time: " + (System.currentTimeMillis() - time));

        time = System.currentTimeMillis();
        long incompletePassPlays = collection.count(incompletePassQuery);
        System.out.println("Incomplete pass query time: " + (System.currentTimeMillis() - time));

        time = System.currentTimeMillis();
        long fieldGoalPlays = collection.count(fieldGoalQuery);
        System.out.println("Field Goal query time: " + (System.currentTimeMillis() - time));

        time = System.currentTimeMillis();
        long extraPointPlays = collection.count(extraPointQuery);
        System.out.println("Extra point query time: " + (System.currentTimeMillis() - time));


        long runPlays = 0;
        return new SituationStatisticsReport(Utilities.getStatsTitle(down, togo, ydline, team),
                                            totalPlays,
                                            passPlays - incompletePassPlays,
                                            incompletePassPlays,
                                            fieldGoalPlays,
                                            extraPointPlays,
                                            runPlays);
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
