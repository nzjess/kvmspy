package org.ubercraft.kvmspy.shell;

public interface Shell {

    Command command(String host) throws Exception;
}
