package org.ubercraft.kvmspy.util;

import java.util.concurrent.TimeUnit;

public class StopWatch {

    private long start;

    public StopWatch() {
        this.reset();
    }

    public void reset() {
        this.start = System.nanoTime();
    }

    public long elapsed(TimeUnit unit) {
        return unit.convert(System.nanoTime() - start, TimeUnit.NANOSECONDS);
    }
}
