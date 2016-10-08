package org.ubercraft.kvmspy.parser;

import static org.ubercraft.kvmspy.util.StringUtil.parseMiB;

import java.io.Reader;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

import com.mycila.xmltool.XMLDoc;
import com.mycila.xmltool.XMLTag;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.ubercraft.kvmspy.model.KvmDiskFileDevice;
import org.ubercraft.kvmspy.model.KvmDomain;
import org.ubercraft.kvmspy.model.VirtualMachine;

@Component
public class KvmDomainParser {

    private static final Logger log = LoggerFactory.getLogger(KvmDomainParser.class);

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

    public KvmDomain parseDomainXml(KvmDomain domain, Reader reader) {
        XMLTag xml = XMLDoc.from(reader);

        extract(domain, () -> {
            xml.gotoChild("memory");
            domain.setMemory(parseMiB(xml.getText(), xml.getAttribute("unit")));
            xml.gotoParent();
        });

        extract(domain, () -> {
            xml.gotoChild("vcpu");
            domain.setCpus(Integer.parseInt(xml.getText()));
            xml.gotoParent();
        });

        extract(domain, () -> {
            xml.gotoChild("cpu").gotoChild("model");
            domain.setCpuModel(xml.getText());
            xml.gotoParent().gotoParent();
        });

        extract(domain, () -> {
            xml.gotoChild("os").gotoChild("type");
            domain.setOsArch(xml.getAttribute("arch"));
            domain.setOsMachine(xml.getAttribute("machine"));
            domain.setOsType(xml.getText());
            xml.gotoParent().gotoParent();
        });

        if (xml.hasTag("devices")) {
            domain.setKvmDiskFileDevices(new HashSet<>());
            extract(domain, () -> {
                xml.gotoChild("devices");
                xml.forEach("disk", doc -> {
                    if ("file".equals(doc.findAttribute("type")) &&
                            "disk".equals(doc.findAttribute("device"))) {
                        KvmDiskFileDevice device = new KvmDiskFileDevice();
                        device.setSnapshotId(domain.getSnapshotId());
                        device.setDev(doc.gotoChild("target").getAttribute("dev"));
                        doc.gotoParent();
                        device.setSource(doc.gotoChild("source").getAttribute("file"));
                        doc.gotoParent();
                        domain.getKvmDiskFileDevices().add(device);
                    }
                });
            });
        }

        return domain;
    }

    private void extract(KvmDomain domain, Runnable action) {
        try {
            action.run();
        }
        catch (Exception e) {
            log.error("{}: {}", domain.name(), e.toString());
        }
    }
}
