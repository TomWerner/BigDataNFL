package com.bigdata.mongodb; /**
 * Created by test on 4/9/15.
 */
import com.bigdata.DataReporting.SituationStatisticsReport;
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
    public SituationStatisticsReport getAllPlays(int down, int togo, int ydline) {
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

        BasicDBObject passQuery = (BasicDBObject) query.append("$text", new BasicDBObject("$search", "pass -incomplete")).copy();
        BasicDBObject incompletePassQuery = (BasicDBObject) query.append("$text", new BasicDBObject("$search", "pass incomplete")).copy();
        BasicDBObject fieldGoalQuery = (BasicDBObject) query.append("$text", new BasicDBObject("$search", "\"field goal\"")).copy();
        BasicDBObject extraPointQuery = (BasicDBObject) query.append("$text", new BasicDBObject("$search", "\"extra point\"")).copy();

        long totalPlays = collection.count(query);
        long passPlays = collection.count(passQuery);
        long incompletePassPlays = collection.count(incompletePassQuery);
        long fieldGoalPlays = collection.count(fieldGoalQuery);
        long extraPointPlays = collection.count(extraPointQuery);
        long runPlays = 0;

        return new SituationStatisticsReport(totalPlays, passPlays, incompletePassPlays, fieldGoalPlays, extraPointPlays, runPlays);
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
