package com.bigdata.mongodb;

import com.bigdata.DataReporting.ExpectationsStatisticsReport;
import com.bigdata.DataReporting.SituationStatisticsReport;
import com.mongodb.DBCursor;

/**
 * Created by test on 4/9/15.
 */
public interface MongoDBInterface {
    public DBCursor testGet();

    public SituationStatisticsReport getPlayStats(int down, int togo, int ydline, String team);

    public ExpectationsStatisticsReport getPlayExpectations(int down, int togo, int ydline, String team, String play);
}
