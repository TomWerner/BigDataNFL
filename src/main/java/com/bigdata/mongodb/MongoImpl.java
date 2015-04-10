package com.bigdata.mongodb; /**
 * Created by test on 4/9/15.
 */
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.MongoClient;

import java.net.UnknownHostException;


public class MongoImpl implements MongoDBInterface {
    private final MongoClient mongoClient;
    private final DB db;
    private final DBCollection collection;

    public MongoImpl() {
        mongoClient = getMongoClient("localhost", 27017);
        db = mongoClient.getDB( "test" );
        collection = db.getCollection("zipcodes");
    }
    @Override
    public DBCursor testGet() {
        return collection.find();
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
