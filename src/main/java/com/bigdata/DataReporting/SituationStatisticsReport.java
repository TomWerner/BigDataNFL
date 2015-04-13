package com.bigdata.DataReporting;

/**
 * Created by Tom on 4/12/2015.
 */
public class SituationStatisticsReport {
    public long passPlays, incompletePassPlays, fieldGoalPlays, extraPointPlays, runPlays, other;
    public String[] names = {"passPlays",
                            "incompletePassPlays",
                            "fieldGoalPlays",
                            "extraPointPlays",
                            "runPlays",
                            "other"};
    public String[] prettyNames = {"Pass Plays",
                                "Incomplete Pass Plays",
                                "Field Goal Plays",
                                "Extra Point Plays",
                                "Run Plays",
                                "Other"};

    public SituationStatisticsReport(long totalPlays,
                                     long passPlays,
                                     long incompletePassPlays,
                                     long fieldGoalPlays,
                                     long extraPointPlays,
                                     long runPlays) {
//        this.totalPlays = totalPlays;
        this.passPlays = passPlays;
        this.incompletePassPlays = incompletePassPlays;
        this.fieldGoalPlays = fieldGoalPlays;
        this.extraPointPlays = extraPointPlays;
        this.runPlays = runPlays;
        this.other = totalPlays - (passPlays + incompletePassPlays + fieldGoalPlays + extraPointPlays + runPlays);
    }
}
