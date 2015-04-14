package com.bigdatanfl.server;

import java.io.*;
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

    public static String getStatsTitle(int down, int togo, int ydline, String team) {
        return getTeam(team) + " decisions when faced with " + getDown(down) + " and " + getTogo(togo) + " yards to go, on their " + getYardline(ydline);
    }

    public static String getExpectationsTitle(int down, int togo, int ydline, String team, String play) {
        return getTeam(team) + " outcomes when doing a \"" + getPlay(play) + "\" play faced with " +
                getDown(down) + " and " +
                getTogo(togo) + " yards to go, on their " +
                getYardline(ydline);
    }

    private static String getPlay(String play) {
        if (play.equals("pass")) return "Pass";
        if (play.equals("middlerun")) return "Run up the middle";
        if (play.equals("run")) return "Outside run";
        if (play.equals("fieldgoal")) return "Field goal attempt";
        if (play.equals("punt")) return "Punt";
        if (play.equals("fakepunt")) return "Fake Punt";
        return "Other";
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

    private static String getTogo(int togo) {
        if (togo <= 10)
            return "" + togo;
        else
            return "more than 10";
    }

    private static String getYardline(int ydline) {
        if (ydline == 100) return "Own: Goal line - 10";
        else if (ydline == 90) return "Own: 10 - 20";
        else if (ydline == 80) return "Own: 20 - 30";
        else if (ydline == 70) return "Own: 30 - 40";
        else if (ydline == 60) return "Own: 40 - 50";
        else if (ydline == 50) return "Opp: 50 - 40";
        else if (ydline == 40) return "Opp: 40 - 30";
        else if (ydline == 30) return "Opp: 30 - 20";
        else if (ydline == 20) return "Opp: 20 - 10";
        else if (ydline == 10) return "Opp: 10 - Goal line";
        else return "other yardage";
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
}
