package com.bigdata.Server;

import com.bigdata.DataReporting.ExpectationsStatisticsReport;
import com.bigdata.DataReporting.SituationStatisticsReport;
import com.bigdata.mongodb.MongoDBInterface;
import com.bigdata.mongodb.MongoImpl;
import com.google.gson.Gson;
import com.mongodb.DBCursor;
import spark.*;
import spark.utils.IOUtils;

import javax.servlet.ServletOutputStream;

import java.util.HashMap;

import static spark.Spark.*;

public class StarterServer {
    public static void main(String[] args) {
        MongoDBInterface mongo = new MongoImpl(); //new MockMongoDB(); //

        get("/", (req, res) -> Utilities.render("static/html/HomePage.html"));
        get("/situations", (req, res) -> Utilities.render("static/html/SituationsPage.html"));
        get("/expectations", (req, res) -> Utilities.render("static/html/ExpectationsPage.html"));



        get("/api/playstats", (req, res) -> {
            int down = Integer.parseInt(req.queryParams("down"));
            int togo_start = Integer.parseInt(req.queryParams("togo_start"));
            int togo_end = Integer.parseInt(req.queryParams("togo_end"));
            int ydline_start = Integer.parseInt(req.queryParams("ydline_start"));
            int ydline_end = Integer.parseInt(req.queryParams("ydline_end"));
            int collapseRuns = Integer.parseInt(req.queryParams("collapse_runs"));
            String team = req.queryParams("team");

            String result = new Gson().toJson(mongo.getPlayStats(down, togo_start, togo_end, ydline_start, ydline_end, team, (collapseRuns == 1)));
            System.out.println(result);
            return result;
        });
        get("/api/playexpectations", (req, res) -> {
            int down = Integer.parseInt(req.queryParams("down"));
            int togo_start = Integer.parseInt(req.queryParams("togo_start"));
            int togo_end = Integer.parseInt(req.queryParams("togo_end"));
            int ydline_start = Integer.parseInt(req.queryParams("ydline_start"));
            int ydline_end = Integer.parseInt(req.queryParams("ydline_end"));
            String team = req.queryParams("team");
            String play1 = req.queryParams("playchoice1");
            String play2 = req.queryParams("playchoice2");
            System.out.println(req.queryParams());

            String result = new Gson().toJson(mongo.getPlayExpectations(down, togo_start, togo_end, ydline_start, ydline_end, team, play1, play2));
            return result;
        });




        // CSS file serving, couldn't get static files working
        get("/css/:name", (req, res) -> {
            res.type("text/css");
            return Utilities.render("static/css/" + req.params(":name"));
        });
        get("/js/:name", (req, res) -> {
            res.type("text/javascript");
            return Utilities.render("static/js/" + req.params(":name"));
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
        public SituationStatisticsReport getPlayStats(int down, int togo_start, int togo_end, int ydline_start, int ydline_end, String team, boolean collapseRuns) {
            try {
                Thread.sleep(3000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            return new SituationStatisticsReport(
                    Utilities.getStatsTitle(down, togo_start, togo_end, ydline_start, ydline_end, team),
                    new HashMap<String, Integer>(), new HashMap<String, String>(), new HashMap<String, String>());
        }

        @Override
        public ExpectationsStatisticsReport getPlayExpectations(int down, int togo_start, int togo_end, int ydline_start, int ydline_end, String team, String play1, String play2) {
            return new ExpectationsStatisticsReport(Utilities.getExpectationsTitle(down, togo_start, togo_end, ydline_start, ydline_end, team, play1),
                    Utilities.getExpectationsTitle(down, togo_start, togo_end, ydline_start, ydline_end, team, play2), 3.7, 0.1, 4.6, 0.3, 15, 3);
        }
    }
}