package com.bigdatanfl.server;

import com.bigdata.DataReporting.SituationStatisticsReport;
import com.bigdata.mongodb.MongoDBInterface;
import com.bigdata.mongodb.MongoImpl;
import com.google.gson.Gson;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import spark.*;
import spark.utils.IOUtils;

import javax.servlet.ServletOutputStream;
import java.io.BufferedInputStream;
import java.io.FileInputStream;
import java.io.InputStream;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.Iterator;

import static spark.Spark.*;

public class StarterServer {
    public static void main(String[] args) {
        MongoDBInterface mongo = new MockMongoDB(); //new MongoImpl(); //

        get("/", (req, res) -> Utilities.render("static/html/HomePage.html"));
        get("/situations", (req, res) -> Utilities.render("static/html/SituationsPage.html"));
        get("/expectations", (req, res) -> Utilities.render("static/html/ExpectationsPage.html"));



        get("/api/playstats", (req, res) -> {
            System.out.println(req.queryParams());
            System.out.println(req.queryParams("down"));
            int down = Integer.parseInt(req.queryParams("down"));
            int togo = Integer.parseInt(req.queryParams("togo"));
            int ydline = Integer.parseInt(req.queryParams("ydline"));
            String team = req.queryParams("team");

            String result = new Gson().toJson(mongo.getAllPlays(down, togo, ydline, team));
            System.out.println(result);
            return result;
        });

        

        // CSS file serving, couldn't get static files working
        get("/css/:name", (req, res) -> {
            res.type("text/css");
            return Utilities.render("static/css/" + req.params(":name"));
        });
        get("/images/:name", new Route() {
            @Override
            public Object handle(Request req, Response res) throws Exception {
                res.type("image/gif");
                ServletOutputStream writer = res.raw().getOutputStream();
                writer.write(IOUtils.toByteArray(Utilities.inputStream("static/images/" + req.params(":name"))));
                return writer;
            }
        });
    }

    private static class MockMongoDB implements MongoDBInterface {

        @Override
        public DBCursor testGet() {
            return null;
        }

        @Override
        public SituationStatisticsReport getAllPlays(int down, int togo, int ydline, String team) {
            try {
                Thread.sleep(3000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            return new SituationStatisticsReport(Utilities.getTitle(down, togo, ydline, team), 100, 40, 30, 10, 5, 15);
        }
    }
}