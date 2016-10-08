package org.ubercraft.kvmspy.util;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.Callable;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.ubercraft.kvmspy.model.Snapshot;
import org.ubercraft.kvmspy.model.SnapshotComponent;

public class SnapshotSession {

    private static final Logger log = LoggerFactory.getLogger(SnapshotSession.class);

    private final Snapshot snapshot;

    public SnapshotSession(Snapshot snapshot) {
        snapshot.setPhysicalMachines(new HashSet<>());
        this.snapshot = snapshot;
    }

    public Snapshot getSnapshot() {
        return snapshot;
    }

    public void close() {
        snapshot.setFinishedAt(LocalDateTime.now());
    }

    public <T> T componentFor(SnapshotComponent parent, Callable<T> action) {
        try {
            T value = action.call();
            if (value instanceof SnapshotComponent) {
                ((SnapshotComponent) value).setSnapshotId(snapshot.getId());
            }
            return value;
        }
        catch (Exception e) {
            log.error("failure creating component", e);
            parent.setError(true);
        }
        return null;
    }

    public <T extends SnapshotComponent> Set<T> componentsFor(SnapshotComponent parent, Callable<Set<T>> action) {
        try {
            Set<T> components = action.call();
            if (components != null) {
                components.forEach(component -> component.setSnapshotId(snapshot.getId()));
            }
            return components;
        }
        catch (Exception e) {
            log.error("failure creating components", e);
            parent.setError(true);
        }
        return null;
    }
}
