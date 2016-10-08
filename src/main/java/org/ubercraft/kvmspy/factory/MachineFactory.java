package org.ubercraft.kvmspy.factory;

import static java.util.Objects.requireNonNull;

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
import org.ubercraft.kvmspy.parser.KvmDomainParser;
import org.ubercraft.kvmspy.parser.NetworkInterfaceParser;
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
    private FileSystemsParser fileSystemsParser;

    @Autowired
    private NetworkInterfaceParser networkInterfaceParser;

    public PhysicalMachine createPhysicalMachine(SnapshotSession session, String hostname) throws IOException {
        PhysicalMachine machine = new PhysicalMachine();
        machine.setDomain(hostname);

        populateMachine(session, machine, true);

        if (machine.getIpv4() != null) {
            machine.setKvmDomains(new HashSet<>());

            try (Command command = shell.command(machine.getIpv4())) {
                List<KvmDomain> domains = kvmDomainParser.parseDomainList(command.send("virsh list --all"));

                domains.forEach(domain -> {
                    machine.getKvmDomains().add(session.componentFor(domain,
                            () -> kvmDomainParser.parseDomainXml(domain, command.send("virsh dumpxml " + domain.getVirtualMachine().getDomain()))));

                    populateMachine(session, domain.getVirtualMachine(), false);
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
            machine.setIpv4(requireNonNull(session.componentFor(machine,
                    () -> InetAddress.getByName(machine.getDomain()).getHostAddress()), "ipv4"));

            if (running) {
                try (Command command = shell.command(machine.getIpv4())) {
                    machine.setHostname(session.componentFor(machine,
                            () -> command.send("hostname").get(0)));

                    machine.setUname(session.componentFor(machine,
                            () -> command.send("uname -a").get(0)));

                    machine.setFileSystems(session.componentsFor(machine,
                            () -> fileSystemsParser.parse(command.send("df -k"))));

                    machine.setNetworkInterfaces(session.componentsFor(machine,
                            () -> networkInterfaceParser.parse(command.send("ifconfig -a"))));
                }
            }
        }
        catch (Exception e) {
            log.error("failure creating machine: " + machine.getDomain(), e);
            machine.setError(true);
        }
    }
}
