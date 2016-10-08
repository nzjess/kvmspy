package org.ubercraft.kvmspy.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.Reader;
import java.util.ArrayList;
import java.util.List;

public class StringUtil {

    public static List<String> lines(Reader reader) throws IOException {
        BufferedReader buffered = reader instanceof BufferedReader
                ? (BufferedReader)reader
                : new BufferedReader(reader);

        List<String> lines = new ArrayList<>();
        for (String line; (line = buffered.readLine()) != null; ) {
            lines.add(line);
        }
        return lines;
    }

    public static int parseMiB(String string, String unit) {
        long value = Long.parseLong(string);
        switch (unit.toLowerCase()) {
            case "b":
                value /= 1024;
            case "k":
            case "kb":
            case "kib":
                value /= 1024;
            case "g":
            case "gb":
            case "gib":
                break;
            default:
                throw new IllegalArgumentException("unknown unit: " + unit);
        }
        return (int)value;
    }
}
