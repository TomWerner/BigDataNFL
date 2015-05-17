package com.bigdata.DataReporting;

import com.bigdata.Server.Utilities;

/**
 * Created by Tom on 4/14/2015.
 */
public class ExpectationsStatisticsReport {
    private final String title1, title2;
    private final int numPlays1, numPlays2;
    public String avgYards1, avgYards2, avgPoints1, avgPoints2;

    public String[] names1 = {"avgYards1",
            "avgPoints1",
            "numPlays1"};
    public String[] names2 = {"avgYards2",
            "avgPoints2",
            "numPlays2"};

    public String[] prettyNames = {"Average Yards Gained",
            "Average Points Scored",
            "Matching Plays"};

    public ExpectationsStatisticsReport(String title1, String title2, double avgYards1, double avgPoints1, double avgYards2, double avgPoints2, int numPlays1, int numPlays2) {
        this.title1 = title1;
        this.title2 = title2;
        this.avgPoints1 = Utilities.toString(avgPoints1);
        this.avgPoints2 = Utilities.toString(avgPoints2);
        this.avgYards1 = Utilities.toString(avgYards1);
        this.avgYards2 = Utilities.toString(avgYards2);
        this.numPlays1 = numPlays1;
        this.numPlays2 = numPlays2;
    }
}
