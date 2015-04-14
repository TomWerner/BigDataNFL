package com.bigdata.DataReporting;

/**
 * Created by Tom on 4/14/2015.
 */
public class ExpectationsStatisticsReport {
    public double averageYardsGained, averagePointsScored, frequencyOfPenalties;
    public String title;

    public String[] names = {"averageYardsGained",
            "averagePointsScored",
            "frequencyOfPenalties"};
    public String[] prettyNames = {"Average Yards Gained",
            "Average Points Scored",
            "Frequency of Penalties"};

    public ExpectationsStatisticsReport(String title,
                                        double averageYardsGained,
                                        double averagePointsScored,
                                        double frequencyOfPenalties) {
        this.averagePointsScored = averagePointsScored;
        this.averageYardsGained = averageYardsGained;
        this.frequencyOfPenalties = frequencyOfPenalties;
        this.title = title;
    }
}
