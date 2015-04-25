package com.bigdata.DataReporting;

/**
 * Created by Tom on 4/14/2015.
 */
public class ExpectationsStatisticsReport {
    private final String title1, title2;
    public double avgYards1, avgYards2, avgPoints1, avgPoints2;

    public String[] names1 = {"avgYards1",
            "avgPoints1"};
    public String[] names2 = {"avgYards2",
            "avgPoints2"};

    public String[] prettyNames = {"Average Yards Gained",
            "Average Points Scored",
            "Average Yards Gained",
            "Average Points Scored",};

    public ExpectationsStatisticsReport(String title1, String title2, double avgYards1, double avgPoints1, double avgYards2, double avgPoints2) {
        this.title1 = title1;
        this.title2 = title2;
        this.avgPoints1 = avgPoints1;
        this.avgPoints2 = avgPoints2;
        this.avgYards1 = avgYards1;
        this.avgYards2 = avgYards2;
    }
}
