package com.bigdata.mongodb; /**
 * Created by test on 4/9/15.
 */
import com.bigdata.DataReporting.ExpectationsStatisticsReport;
import com.bigdata.DataReporting.SituationStatisticsReport;
import com.bigdata.Server.Utilities;
import com.google.gson.Gson;
import com.mongodb.*;

import java.net.UnknownHostException;
import java.util.*;


public class KMeans {
    private final MongoClient mongoClient;
    private final DB db;
    private final DBCollection collection;

    public KMeans() {
        mongoClient = getMongoClient("localhost", 27017);
        db = mongoClient.getDB( "nfl" );
        collection = db.getCollection("teamSeasonVectors");
    }

    public static void main(String[] args) {
        String team = "";
        Scanner scan = new Scanner(System.in);
        while (!team.equalsIgnoreCase("done")) {
            System.out.print("Enter an NFL Team: ");
            team = scan.nextLine();

            DBCollection collection = getCollection();
            DBCursor cursor = collection.find(new BasicDBObject("_id.off", new BasicDBObject("$ne", ""))
                    .append("_id.season", new BasicDBObject("$ne", "")));
            HashMap<String, Double[]> mapping = new HashMap<>();
            while (cursor.hasNext()) {
                DBObject object = cursor.next();
                DBObject vectorKey = (DBObject) object.get("_id");
                String[] keys = object.keySet().toArray(new String[object.keySet().size()]);
                Arrays.sort(keys);
                ArrayList<Double> values = new ArrayList<>();
                for (String strKey : keys) {
                    if (strKey.equals("_id")) continue;
                    values.add((Double) object.get(strKey));
                }
                Double[] valueArray = values.toArray(new Double[values.size()]);
                mapping.put(new Gson().toJson(vectorKey), valueArray);
            }

            ArrayList<String> stringResults = new ArrayList<>();
            for (String key : mapping.keySet()) {
                if (!key.contains("\"off\":\"" + team + "\"")) continue;
                Double[] vector1 = mapping.get(key);
                double max = Double.MIN_VALUE;
                String closest = null;
                for (String strKey : mapping.keySet()) {
                    if (!strKey.equals(key) && strKey != null) {
                        double similarity = cosineSimilarity(vector1, mapping.get(strKey));

                        if (similarity > max) {
                            max = similarity;
                            closest = strKey;
                        }
                    }
                }
                String result = ("The closest team to " + key + " is: " + closest + " with a similarity of: " + max);
                stringResults.add(result);
            }
            Collections.sort(stringResults);
            for (String str : stringResults)
                System.out.println(str);
            System.out.println("\n");
        }
    }

    public static double cosineSimilarity(Double[] vector1, Double[] vector2) {
        double similarity = dotProduct(vector1, vector2) / (vectorLength(vector1) * vectorLength(vector2));
        return 1 - Math.acos(similarity) / Math.PI;
    }

    private static double dotProduct(Double[] vector1, Double[] vector2) {
        double result = 0;
        for (int i = 0; i < vector1.length; i++)
            result += vector1[i] * vector2[i];
        return result;
    }

    private static double vectorLength(Double[] vector) {
        double preSqrtSum = dotProduct(vector, vector);
        return Math.sqrt(preSqrtSum);
    }

    public static DBCollection getCollection() {
        return getMongoClient("localhost", 27017).getDB("nfl").getCollection("teamSeasonVectors");
    }

    public static MongoClient getMongoClient(String url, int port) {
        MongoClient mongoClient = null;
        try {
            mongoClient = new MongoClient( url, port );
        } catch (UnknownHostException e) {
            e.printStackTrace();
        }
        return mongoClient;
    }
}
