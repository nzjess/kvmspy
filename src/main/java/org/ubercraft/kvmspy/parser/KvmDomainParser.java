package org.ubercraft.kvmspy.parser;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;
import org.ubercraft.kvmspy.model.KvmDomain;
import org.ubercraft.kvmspy.model.VirtualMachine;

@Component
public class KvmDomainParser {

    public List<KvmDomain> parseDomainList(List<String> lines) {
        List<KvmDomain> domains = new ArrayList<>();

        for (String line : lines.subList(2, lines.size())) {
            line = line.trim();
            if (!line.isEmpty()) {
                String[] parts = line.split("\\s+", 3);

                final Long id = parts[0].equals("-") ? null : Long.parseLong(parts[0]);
                final String hostname = parts[1];
                final String state = parts[2];

                KvmDomain domain = new KvmDomain();
                domain.setState(state);

                VirtualMachine machine = new VirtualMachine();
                machine.setDomain(hostname);

                domain.setVirtualMachine(machine);

                domains.add(domain);
            }
        }

        return domains;
    }

    public KvmDomain parseDomainXml(KvmDomain domain, List<String> lines) {
        return domain;
    }
}
