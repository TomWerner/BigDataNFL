package com.bigdatanfl.server;

import java.io.*;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Scanner;

/**
 * Created by test on 4/9/15.
 */
public class Utilities {
    public static String render(String path) {
        try {
            Scanner scan = new Scanner(new File(path));
            StringBuilder result = new StringBuilder();
            while (scan.hasNextLine()) {
                String line = scan.nextLine();
                if (line.length() > 0 && line.charAt(0) == '?' && line.charAt(line.length() - 1) == '?')
                    result.append(render(line.substring(1, line.length() - 1)) + "\n");
                else
                    result.append(line + "\n");
            }
            return result.toString();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        return "Path Error. Tried " + path + ".";
    }

    public static String getStatsTitle(int down, int togo_start, int togo_end, int ydline_start, int ydline_end, String team) {
        return getTeam(team) + " decisions when faced with " + getDown(down) + " and " + getTogo(togo_start, togo_end) + " yards to go, bewteen their " + getYardline(ydline_start) + " and their " + getYardline(ydline_end);
    }

    public static String getExpectationsTitle(int down, int togo_start, int togo_end, int ydline_start, int ydline_end, String team, String play) {
        return getTeam(team) + " outcomes when doing a \"" + getPlay(play) + "\" play faced with " +
                getDown(down) + " and " +
                getTogo(togo_start, togo_end) + " yards to go, between their " +
                getYardline(ydline_start) + " and their " + getYardline(ydline_end);
    }

    private static String getPlay(String play) {
        if (play.equals("pass")) return "Pass";
        if (play.equals("middlerun")) return "Run up the middle";
        if (play.equals("outsiderun")) return "Outside run";
        if (play.equals("fieldgoal")) return "Field goal attempt";
        if (play.equals("punt")) return "Punt";
        if (play.equals("twopoint")) return "Two Point attempt";
        if (play.equals("extrapoint")) return "Extra Point attempt";
        return "Other";
    }

    private static String[] toMongoList(String... args) {
        return args;
    }

    public static String[] toPlayChoice(String play) {
        if (play.equals("pass")) return toMongoList("PASS", "PASS INCOMPLETE");
        if (play.equals("middlerun")) return toMongoList("RUN MIDDLE", "RUN OTHER");
        if (play.equals("outsiderun")) return toMongoList("RUN LEFT", "RUN RIGHT");
        if (play.equals("fieldgoal")) return toMongoList("FIELD GOAL");
        if (play.equals("punt")) return toMongoList("PUNT");
        if (play.equals("twopoint")) return toMongoList("TWO POINT ATTEMPT");
        if (play.equals("extrapoint")) return toMongoList("EXTRA POINT");
        return toMongoList("OTHER");
    }


    private static String getTeam(String team) {
        if (team.equals("ANY"))
            return "Coach";
        else return getTeamName(team);
    }

    private static String getDown(int down) {
        if (down == 1)
            return "First Down";
        else if (down == 2)
            return "Second Down";
        else if (down == 3)
            return "Third Down";
        else if (down == 4)
            return "Fourth Down";
        else
            return "Special Teams";
    }

    private static String getTogo(int togoStart, int togoEnd) {
        return "" + togoStart + " to " + togoEnd;
    }

    private static String getYardline(int ydline) {
        if (ydline > 50)
            return "Own " + (100 - ydline);
        else
            return "Opp " + ydline;
    }

    public static String getTeamName(String teamABVR) {
        HashMap<String, String> teamMap = new HashMap<String, String>();
        teamMap.put("ARI", "Arizona Cardinals");
        teamMap.put("ATL", "Atlanta Falcons");
        teamMap.put("BAL", "Baltimore Ravens");
        teamMap.put("BUF", "Buffalo Bills");
        teamMap.put("CAR", "Carolina Panthers");
        teamMap.put("CHI", "Chicago Bears");
        teamMap.put("CIN", "Cincinnati Bengals");
        teamMap.put("CLE", "Cleveland Browns");
        teamMap.put("DAL", "Dallas Cowboys");
        teamMap.put("DEN", "Denver Broncos");
        teamMap.put("DET", "Detroit Lions");
        teamMap.put("GB", "Green Bay Packers");
        teamMap.put("HOU", "Houston Texans");
        teamMap.put("IND", "Indianapolis Colts");
        teamMap.put("JAX", "Jacksonville Jaguars");
        teamMap.put("KC", "Kansas City Chiefs");
        teamMap.put("MIA", "Miami Dolphins");
        teamMap.put("MIN", "Minnesota Vikings");
        teamMap.put("NE", "New England Patriots");
        teamMap.put("NO", "New Orleans Saints");
        teamMap.put("NYG", "New York Giants");
        teamMap.put("NYJ", "New York Jets");
        teamMap.put("OAK", "Oakland Raiders");
        teamMap.put("PHI", "Philadelphia Eagles");
        teamMap.put("PIT", "Pittsburgh Steelers");
        teamMap.put("SD", "San Diego Chargers");
        teamMap.put("SEA", "Seattle Seahawks");
        teamMap.put("SF", "San Francisco 49ers");
        teamMap.put("STL", "Saint Louis Rams");
        teamMap.put("TB", "Tampa Bay Buccaneers");
        teamMap.put("TEN", "Tennessee Titans");
        teamMap.put("WAS", "Washington Redskins");

        return teamMap.get(teamABVR);
    }

    public static InputStream inputStream(String path) throws FileNotFoundException {
        return new BufferedInputStream(new FileInputStream(path));
    }

    public static String toString(double number) {
        return String.format("%.02f", number);
    }
}
