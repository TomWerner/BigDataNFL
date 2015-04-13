package com.bigdata.mongodb;

import com.bigdata.DataReporting.SituationStatisticsReport;
import com.mongodb.DBCursor;

/**
 * Created by test on 4/9/15.
 */
public interface MongoDBInterface {
    public DBCursor testGet();

    public SituationStatisticsReport getAllPlays(int down, int togo, int ydline, String team);
}
