package org.ubercraft.kvmspy.shell;

import java.io.Closeable;
import java.util.List;

public interface Command extends Closeable {

    List<String> send(String command) throws Exception;
}
