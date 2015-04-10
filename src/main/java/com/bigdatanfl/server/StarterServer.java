package com.bigdatanfl.server;

import com.bigdata.mongodb.MongoDBInterface;
import com.bigdata.mongodb.MongoImpl;
import com.google.gson.Gson;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;

import java.util.ArrayList;
import java.util.Iterator;

import static spark.Spark.*;

public class StarterServer {
    public static void main(String[] args) {
        MongoDBInterface mongo = new MongoImpl();

        get("/hello", (req, res) -> {
            return Utilities.render("static/html/Hello.html");
        });

        get("/zipcodes", (req, res) -> {
            Iterator<DBObject> iter = mongo.testGet().iterator();
            ArrayList<DBObject> results = new ArrayList<DBObject>();
            for (int i = 0; i < 20 && iter.hasNext(); i++)
                results.add(iter.next());
            String result = new Gson().toJson(results);
            System.out.println(result);
            return result;
        });
    }
}