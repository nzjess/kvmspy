package org.ubercraft.kvmspy.util;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.util.List;
import java.util.Map;

import org.junit.Test;

public class ColumniserTest {

    @Test
    public void testColumniser1() {
        Columniser columniser = new Columniser("" +
                "One Two   Qqq   Three X Y  Zzzzz ww\n" +
                "Aa  Bbbbb Qq    Ccccc 1 22 333\n" +
                "A   Bbbb  Qqqqq Ccccc 1 22 3\n" +
                "Aaa Bb    Qqq   Ccccc 1 2  3")
                .headings("One", "Two", "Three", "X", "Y", "Zzzzz ww")
                .analyse();

        Map<String, List<String>> columns = columniser.columniseWithHeadings();
        assertEquals(6, columns.size());
        {
            List<String> col = columns.get("One");
            assertNotNull(col);
            assertEquals(3, col.size());
            assertEquals("Aa", col.get(0));
            assertEquals("A", col.get(1));
            assertEquals("Aaa", col.get(2));
        }
        {
            List<String> col = columns.get("Two");
            assertNotNull(col);
            assertEquals(3, col.size());
            assertEquals("Bbbbb", col.get(0));
            assertEquals("Bbbb", col.get(1));
            assertEquals("Bb", col.get(2));
        }
        {
            List<String> col = columns.get("Three");
            assertNotNull(col);
            assertEquals(3, col.size());
            assertEquals("Ccccc", col.get(0));
            assertEquals("Ccccc", col.get(1));
            assertEquals("Ccccc", col.get(2));
        }
        {
            List<String> col = columns.get("X");
            assertNotNull(col);
            assertEquals(3, col.size());
            assertEquals("1", col.get(0));
            assertEquals("1", col.get(1));
            assertEquals("1", col.get(2));
        }
        {
            List<String> col = columns.get("Y");
            assertNotNull(col);
            assertEquals(3, col.size());
            assertEquals("22", col.get(0));
            assertEquals("22", col.get(1));
            assertEquals("2", col.get(2));
        }
        {
            List<String> col = columns.get("Zzzzz ww");
            assertNotNull(col);
            assertEquals(3, col.size());
            assertEquals("333", col.get(0));
            assertEquals("3", col.get(1));
            assertEquals("3", col.get(2));
        }
    }
}
