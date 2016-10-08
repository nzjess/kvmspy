package org.ubercraft.kvmspy.util;

public class WrappedRuntimeException extends RuntimeException {

    public WrappedRuntimeException(Exception e) {
        super(e);
    }

    public static RuntimeException wrap(Exception e) {
        if (e instanceof RuntimeException) {
            return (RuntimeException) e;
        }
        else {
            return new WrappedRuntimeException(e);
        }
    }
}
