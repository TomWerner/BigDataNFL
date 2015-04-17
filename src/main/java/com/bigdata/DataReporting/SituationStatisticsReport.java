package com.bigdata.DataReporting;

/**
 * Created by Tom on 4/12/2015.
 */
public class SituationStatisticsReport {
    public long passPlays, incompletePassPlays, fieldGoalPlays, extraPointPlays, runPlays, puntPlays, spikePlays;
    public String title;
    public String[] names = {"passPlays",
                            "incompletePassPlays",
                            "fieldGoalPlays",
                            "extraPointPlays",
                            "runPlays",
                            "puntPlays",
                            "spikePlays"};
    public String[] prettyNames = {"Pass Plays",
                                "Incomplete Pass Plays",
                                "Field Goal Plays",
                                "Extra Point Plays",
                                "Run Plays",
                                "Punt Plays",
                                "Spike Plays"};

    public SituationStatisticsReport(String title,
                                     long totalPlays,
                                     long passPlays,
                                     long incompletePassPlays,
                                     long fieldGoalPlays,
                                     long extraPointPlays,
                                     long runMiddlePlays,
                                     long runLeftPlays,
                                     long runRightPlays,
                                     long runOtherPlays,
                                     long puntPlays,
                                     long spikePlays) {
        this.title = title;
        this.passPlays = passPlays;
        this.incompletePassPlays = incompletePassPlays;
        this.fieldGoalPlays = fieldGoalPlays;
        this.extraPointPlays = extraPointPlays;
        this.runPlays = runMiddlePlays + runLeftPlays + runRightPlays + runOtherPlays;
        this.puntPlays = puntPlays;
        this.spikePlays = spikePlays;
        System.out.println("TOTAL PLAYS: " + totalPlays);
    }
}
