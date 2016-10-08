package org.ubercraft.kvmspy.parser;

import static org.ubercraft.kvmspy.util.StringUtil.parseMiB;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;
import org.ubercraft.kvmspy.model.Machine;
import org.ubercraft.kvmspy.util.Columniser;

@Component
public class FreeMemoryParser {

    public Machine parse(Machine machine, List<String> lines) {
        lines = lines.stream().filter(line -> {
            return !line.contains("buffers/cache:");
        }).collect(Collectors.toList());

        Map<String, List<String>> columns = new Columniser(lines)
                .analyse()
                .columniseWithHeadings();

        List<String> types = columns.get("");
        List<String> totals = columns.get("total");

        for (int i = 0; i < types.size(); i++) {
            switch (types.get(i)) {
                case "Mem:":
                    machine.setMemory(parseMiB(totals.get(i), "kib"));
                    break;
                case "Swap:":
                    machine.setSwap(parseMiB(totals.get(i), "kib"));
                    break;
            }
        }

        return machine;
    }
}
