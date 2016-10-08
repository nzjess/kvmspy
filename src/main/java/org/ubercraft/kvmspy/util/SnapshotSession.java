package org.ubercraft.kvmspy.util;

import static java.util.Objects.requireNonNull;
import static java.util.function.Function.identity;
import static java.util.stream.Collectors.toMap;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.time.LocalDateTime;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.Callable;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.ubercraft.kvmspy.model.HostEntry;
import org.ubercraft.kvmspy.model.Machine;
import org.ubercraft.kvmspy.model.Snapshot;
import org.ubercraft.kvmspy.model.SnapshotComponent;

public class SnapshotSession {

    private static final Logger log = LoggerFactory.getLogger(SnapshotSession.class);

    private final Snapshot snapshot;

    private final Map<String, HostEntry> hostEntriesByDomain;

    public SnapshotSession(Snapshot snapshot, Set<HostEntry> hostEntries) {
        this.snapshot = snapshot;
        this.hostEntriesByDomain = hostEntries.stream().collect(toMap(HostEntry::getDomain, identity()));
    }

    public Snapshot getSnapshot() {
        return snapshot;
    }

    public void close() {
        snapshot.setFinishedAt(LocalDateTime.now());
    }

    public void populateHostAndIpv4(Machine machine) throws UnknownHostException {
        HostEntry hostEntry = hostEntriesByDomain.get(requireNonNull(machine.getDomain(), "domain"));
        if (hostEntry != null) {
            machine.setHost(hostEntry.getHost());
            machine.setIpv4(hostEntry.getIpv4());
        }
        else {
            machine.setHost(machine.getDomain());
        }
        if (machine.getIpv4() == null) {
            machine.setIpv4(requireNonNull(InetAddress.getByName(machine.getHost()).getHostAddress(), "ipv4"));
        }
    }

    public <T> T componentFor(SnapshotComponent parent, Callable<T> action) {
        try {
            parent.setSnapshotId(snapshot.getId());
            T value = action.call();
            if (value instanceof SnapshotComponent) {
                ((SnapshotComponent)value).setSnapshotId(snapshot.getId());
            }
            return value;
        }
        catch (Exception e) {
            log.error("failure creating component, parent: " + parent.name(), e);
            parent.setError(true);
        }
        return null;
    }

    public <T extends SnapshotComponent> Set<T> componentsFor(SnapshotComponent parent, Callable<Set<T>> action) {
        try {
            parent.setSnapshotId(snapshot.getId());
            Set<T> components = action.call();
            if (components != null) {
                components.forEach(component -> component.setSnapshotId(snapshot.getId()));
            }
            return components;
        }
        catch (Exception e) {
            log.error("failure creating components, parent: " + parent.name(), e);
            parent.setError(true);
        }
        return null;
    }
}
