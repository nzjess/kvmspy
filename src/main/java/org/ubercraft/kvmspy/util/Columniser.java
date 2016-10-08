package org.ubercraft.kvmspy.util;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import lombok.Getter;

public class Columniser {

    private final List<String> lines;

    private Set<String> headings = null;

    private List<Bound> bounds = Collections.emptyList();

    public Columniser(String text) {
        this(Arrays.asList(text.split("\\n")));
    }

    public Columniser(List<String> lines) {
        this.lines = lines;
    }

    public Columniser headings(String... headings) {
        return headings(new HashSet<>(Arrays.asList(headings)));
    }

    public Columniser headings(Set<String> headings) {
        this.headings = headings;
        return this;
    }

    public Columniser analyse() {
        int maxLineLength = 0;
        for (String line : lines) {
            maxLineLength = Math.max(maxLineLength, line.length());
        }

        int maxContiguous = 2;

        String headingLine = null;
        String firstLine = null;
        if (headings != null && !lines.isEmpty()) {
            firstLine = lines.get(0);
            headingLine = createHeadingLine(headings, firstLine);
        }

        final int[][] gaps = countGaps(headingLine, lines, maxContiguous, maxLineLength);

        final int SOFT = 0;
        final int HARD = 1;

        final List<Integer> edges = new ArrayList<>();
        final int n = lines.size();

        boolean hard1 = false;
        for (int i = 0; i < gaps[0].length; i++) {
            boolean soft0 = (i > 0) && (gaps[SOFT][i - 1] == n);

            if (soft0 && hard1) {
                continue;
            }

            boolean edge0 = (i > 0) && (gaps[SOFT][i - 1] == 0);
            boolean soft1 = (gaps[SOFT][i] == n);

            if ((edge0 || hard1) && soft1) {
                edges.add(i);
                hard1 = false;
                continue;
            }

            hard1 |= (gaps[HARD][i] > 0);
        }

        List<Bound> bounds = new ArrayList<>();

        int prevEdge = 0;
        for (Integer edge : edges) {
            Bound bound = new Bound(prevEdge, edge);
            prevEdge = edge;

            if (headingLine != null) {
                String heading = bound.value(firstLine);
                if (!headings.contains(heading)) {
                    continue;
                }
            }

            bounds.add(bound);
        }

        this.bounds = Collections.unmodifiableList(bounds);

        return this;
    }

    @Getter
    public static class Bound {

        private final int start;
        private final int end;

        private Bound(int start, int end) {
            this.start = start;
            this.end = end;
        }

        public String value(String line) {
            return line.substring(
                    Math.min(start, line.length()),
                    Math.min(end, line.length()))
                       .trim();
        }
    }

    public List<String> getLines() {
        return lines;
    }

    public List<Bound> getBounds() {
        return bounds;
    }

    public List<List<String>> columnise() {
        List<List<String>> columns = new ArrayList<>(bounds.size());

        for (Bound bound : bounds) {
            columns.add(new ArrayList<>(lines.size()));
        }

        for (String line : lines) {
            for (int columnIndex = 0; columnIndex < bounds.size(); columnIndex++) {
                Bound bound = bounds.get(columnIndex);
                List<String> column = columns.get(columnIndex);
                column.add(bound.value(line));
            }
        }

        return columns;
    }

    public Map<String, List<String>> columniseWithHeadings() {
        List<List<String>> columns = columnise();

        Map<String, List<String>> columnsWithHeadings = new HashMap<>();

        for (List<String> column : columns) {
            String heading = column.remove(0);
            columnsWithHeadings.put(heading, column);
        }

        return columnsWithHeadings;
    }

    private static int[][] countGaps(String headingLine, List<String> lines, int maxContiguous, int maxLineLength) {
        if (headingLine != null) {
            lines = lines.subList(1, lines.size());
        }

        maxLineLength += maxContiguous;

        int[][] spaces = new int[maxContiguous][maxLineLength];
        for (int fromIndex = 0; fromIndex < maxLineLength; fromIndex++) {
            for (int forContiguous = 1; forContiguous <= maxContiguous; forContiguous++) {
                spaces[forContiguous - 1][fromIndex] = countLinesHavingNumberOfContiguousSpacesFromIndex(headingLine, lines, fromIndex, forContiguous);
            }
        }

        return spaces;
    }

    private static String createHeadingLine(Set<String> headings, String line) {
        StringBuilder buffer = null;

        for (String heading : headings) {
            if (heading.indexOf(' ') != -1) {
                int index = line.indexOf(heading);
                if (index != -1) {
                    if (buffer == null) {
                        buffer = new StringBuilder(line);
                    }
                    for (int i = 0; i < heading.length(); i++) {
                        if (heading.charAt(i) == ' ') {
                            buffer.setCharAt(index + i, '_');
                        }
                    }
                }
            }
        }

        if (buffer != null) {
            return buffer.toString();
        }

        return line;
    }

    private static int countLinesHavingNumberOfContiguousSpacesFromIndex(String headingLine, List<String> lines, int fromIndex, int forContiguous) {
        int count = 0;

        if (headingLine != null) {
            if (lineHasContigousSpacesFromIndex(headingLine, fromIndex, forContiguous)) {
                count++;
            }
        }

        for (String line : lines) {
            if (lineHasContigousSpacesFromIndex(line, fromIndex, forContiguous)) {
                count++;
            }
        }

        return count;
    }

    private static boolean lineHasContigousSpacesFromIndex(String line, int fromIndex, int forContiguous) {
        for (int i = fromIndex; i < fromIndex + forContiguous; i++) {
            if (i < line.length() && line.charAt(i) != ' ') {
                return false;
            }
        }
        return true;
    }
}
