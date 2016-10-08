package org.ubercraft.kvmspy.shell;

import java.io.Closeable;
import java.io.Reader;

public interface Command extends Closeable {

    Reader send(String command) throws Exception;
}
