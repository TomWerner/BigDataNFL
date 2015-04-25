package com.bigdatanfl.server;

import com.bigdata.DataReporting.ExpectationsStatisticsReport;
import com.bigdata.DataReporting.SituationStatisticsReport;
import com.bigdata.mongodb.MongoDBInterface;
import com.bigdata.mongodb.MongoImpl;
import com.google.gson.Gson;
import com.mongodb.DBCursor;
import spark.*;
import spark.utils.IOUtils;

import javax.servlet.ServletOutputStream;

import static spark.Spark.*;

public class StarterServer {
    public static void main(String[] args) {
        MongoDBInterface mongo = new MongoImpl(); //new MockMongoDB(); //

        get("/", (req, res) -> Utilities.render("static/html/HomePage.html"));
        get("/situations", (req, res) -> Utilities.render("static/html/SituationsPage.html"));
        get("/expectations", (req, res) -> Utilities.render("static/html/ExpectationsPage.html"));



        get("/api/playstats", (req, res) -> {
            int down = Integer.parseInt(req.queryParams("down"));
            int togo = Integer.parseInt(req.queryParams("togo"));
            int ydline = Integer.parseInt(req.queryParams("ydline"));
            String team = req.queryParams("team");

            String result = new Gson().toJson(mongo.getPlayStats(down, togo, ydline, team));
            System.out.println(result);
            return result;
        });
        get("/api/playexpectations", (req, res) -> {
            int down = Integer.parseInt(req.queryParams("down"));
            int togo = Integer.parseInt(req.queryParams("togo"));
            int ydline = Integer.parseInt(req.queryParams("ydline"));
            String team = req.queryParams("team");
            String play1 = req.queryParams("playchoice1");
            String play2 = req.queryParams("playchoice2");
            System.out.println(req.queryParams());

            String result = new Gson().toJson(mongo.getPlayExpectations(down, togo, ydline, team, play1, play2));
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
        public SituationStatisticsReport getPlayStats(int down, int togo, int ydline, String team) {
            try {
                Thread.sleep(3000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            return new SituationStatisticsReport(Utilities.getStatsTitle(down, togo, ydline, team), 100, 20, 15, 10, 5, 15, 15, 10, 10, 4, 1);
        }

        @Override
        public ExpectationsStatisticsReport getPlayExpectations(int down, int togo, int ydline, String team, String play1, String play2) {
            return new ExpectationsStatisticsReport(Utilities.getExpectationsTitle(down, togo, ydline, team, play1),
                    Utilities.getExpectationsTitle(down, togo, ydline, team, play2), 3.7, 0.1, 4.6, 0.3);
        }
    }
}