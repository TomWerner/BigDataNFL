package com.bigdatanfl.server;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

/**
 * Created by test on 4/9/15.
 */
public class Utilities {
    public static String render(String path) {
        try {
            Scanner scan = new Scanner(new File(path));
            StringBuilder result = new StringBuilder();
            while (scan.hasNextLine()) {
                String line = scan.nextLine();
                if (line.length() > 0 && line.charAt(0) == '?' && line.charAt(line.length() - 1) == '?')
                    result.append(render(line.substring(1, line.length() - 1)) + "\n");
                else
                    result.append(line + "\n");
            }
            return result.toString();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        return "Path Error. Tried " + path + ".";
    }
}
