package com.bigdata.DataReporting;

import java.util.HashMap;

/**
 * Created by Tom on 4/12/2015.
 */
public class SituationStatisticsReport {
    public HashMap<String, Integer> playCounts;
    public String title;

    public SituationStatisticsReport(String title, HashMap<String, Integer> playCounts) {
        this.title = title;
        this.playCounts = playCounts;
    }
}
