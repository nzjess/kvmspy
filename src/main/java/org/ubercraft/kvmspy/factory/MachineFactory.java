package org.ubercraft.kvmspy.factory;

import static java.util.Objects.requireNonNull;
import static org.ubercraft.kvmspy.util.StringUtil.lines;

import java.io.IOException;
import java.net.InetAddress;
import java.util.HashSet;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.ubercraft.kvmspy.model.KvmDomain;
import org.ubercraft.kvmspy.model.Machine;
import org.ubercraft.kvmspy.model.PhysicalMachine;
import org.ubercraft.kvmspy.parser.FileSystemsParser;
import org.ubercraft.kvmspy.parser.FreeMemoryParser;
import org.ubercraft.kvmspy.parser.KvmDomainParser;
import org.ubercraft.kvmspy.parser.NetworkInterfacesParser;
import org.ubercraft.kvmspy.shell.Command;
import org.ubercraft.kvmspy.shell.Shell;
import org.ubercraft.kvmspy.util.SnapshotSession;

@Component
public class MachineFactory {

    private static final Logger log = LoggerFactory.getLogger(MachineFactory.class);

    @Autowired
    private Shell shell;

    @Autowired
    private KvmDomainParser kvmDomainParser;

    @Autowired
    private FreeMemoryParser freeMemoryParser;

    @Autowired
    private FileSystemsParser fileSystemsParser;

    @Autowired
    private NetworkInterfacesParser networkInterfacesParser;

    public PhysicalMachine createPhysicalMachine(SnapshotSession session, String domain) throws IOException {
        PhysicalMachine machine = new PhysicalMachine();
        machine.setDomain(domain);

        populateMachine(session, machine, true);

        if (machine.getIpv4() != null) {
            machine.setKvmDomains(new HashSet<>());

            try (Command command = shell.command(machine.getIpv4())) {
                List<KvmDomain> domainEntries = kvmDomainParser.parseDomainList(lines(command.send("virsh list --all")));

                domainEntries.forEach(domainEntry -> {
                    machine.getKvmDomains().add(session.componentFor(domainEntry,
                            () -> kvmDomainParser.parseDomainXml(domainEntry, command.send("virsh dumpxml " + domainEntry.getVirtualMachine().getDomain()))));

                    populateMachine(session, domainEntry.getVirtualMachine(), "running".equals(domainEntry.getState()));
                });
            }
            catch (Exception e) {
                log.error("failure creating machine: " + machine.getDomain(), e);
                machine.setError(true);
            }
        }

        return machine;
    }

    private void populateMachine(SnapshotSession session, Machine machine, boolean running) {
        machine.setSnapshotId(session.getSnapshot().getId());

        try {
            session.populateHostAndIpv4(machine);

            if (running) {
                try (Command command = shell.command(machine.getIpv4())) {
                    machine.setHostname(session.componentFor(machine,
                            () -> lines(command.send("hostname")).get(0)));

                    session.componentFor(machine,
                            () -> freeMemoryParser.parse(machine, lines(command.send("free -k"))));

                    machine.setUname(session.componentFor(machine,
                            () -> lines(command.send("uname -a")).get(0)));

                    machine.setFileSystems(session.componentsFor(machine,
                            () -> fileSystemsParser.parse(lines(command.send("df -k")))));

                    machine.setNetworkInterfaces(session.componentsFor(machine,
                            () -> networkInterfacesParser.parse(lines(command.send("ifconfig -a")))));
                }
            }
        }
        catch (Exception e) {
            log.error("failure creating machine: " + machine.getDomain(), e);
            machine.setError(true);
        }
    }
}
