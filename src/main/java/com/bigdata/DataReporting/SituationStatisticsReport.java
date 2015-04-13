package com.bigdata.DataReporting;

/**
 * Created by Tom on 4/12/2015.
 */
public class SituationStatisticsReport {
    public long passPlays, incompletePassPlays, fieldGoalPlays, extraPointPlays, runPlays, other;
    public String title;
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

    public SituationStatisticsReport(String title,
                                     long totalPlays,
                                     long passPlays,
                                     long incompletePassPlays,
                                     long fieldGoalPlays,
                                     long extraPointPlays,
                                     long runPlays) {
//        this.totalPlays = totalPlays;
        this.title = title;
        this.passPlays = passPlays;
        this.incompletePassPlays = incompletePassPlays;
        this.fieldGoalPlays = fieldGoalPlays;
        this.extraPointPlays = extraPointPlays;
        this.runPlays = runPlays;
        System.out.println("TOTAL PLAYS: " + totalPlays);
        this.other = totalPlays - (passPlays + incompletePassPlays + fieldGoalPlays + extraPointPlays + runPlays);
        this.other = Math.max(0, this.other);
    }
}
