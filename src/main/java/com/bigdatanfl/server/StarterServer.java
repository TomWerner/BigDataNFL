package com.bigdatanfl.server;

import com.bigdata.DataReporting.SituationStatisticsReport;
import com.bigdata.mongodb.MongoDBInterface;
import com.bigdata.mongodb.MongoImpl;
import com.google.gson.Gson;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import spark.Spark;
import spark.SparkBase;

import java.util.ArrayList;
import java.util.Iterator;

import static spark.Spark.*;

public class StarterServer {
    public static void main(String[] args) {
        MongoDBInterface mongo = new MongoImpl(); //new MockMongoDB();

        get("/", (req, res) -> Utilities.render("static/html/HomePage.html"));
        get("/situations", (req, res) -> Utilities.render("static/html/SituationsPage.html"));



        get("/api/playstats", (req, res) -> {
            System.out.println(req.queryParams());
            System.out.println(req.queryParams("down"));
            int down = Integer.parseInt(req.queryParams("down"));
            int togo = Integer.parseInt(req.queryParams("togo"));
            int ydline = Integer.parseInt(req.queryParams("ydline"));
            String team = req.queryParams("team");

//            Iterator<DBObject> iter = mongo.getAllPlays(down, togo, ydline);
//            ArrayList<DBObject> results = new ArrayList<DBObject>();
//            for (int i = 0; i < 20 && iter.hasNext(); i++)
//                results.add(iter.next());
//            String result = new Gson().toJson(results);
            String result = new Gson().toJson(mongo.getAllPlays(down, togo, ydline, team));
            System.out.println(result);
            return result;
        });

        // CSS file serving, couldn't get static files working
        get("/css/:name", (req, res) -> {
            res.type("text/css");
            return Utilities.render("static/css/" + req.params(":name"));
        });
    }

    private static class MockMongoDB implements MongoDBInterface {

        @Override
        public DBCursor testGet() {
            return null;
        }

        @Override
        public SituationStatisticsReport getAllPlays(int down, int togo, int ydline, String team) {
            return new SituationStatisticsReport(Utilities.getTitle(down, togo, ydline, team), 100, 50, 20, 10, 5, 15);
        }
    }
}