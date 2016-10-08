package org.ubercraft.kvmspy.parser;

import static org.ubercraft.kvmspy.util.StringUtil.parseMiB;

import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import lombok.AccessLevel;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.ubercraft.kvmspy.model.FileSystem;
import org.ubercraft.kvmspy.util.Columniser;

@Component
@Setter(AccessLevel.PACKAGE)
public class FileSystemsParser {

    @Value("${kvmspy.parser.filesystem.name}")
    private String headerName;
    @Value("${kvmspy.parser.filesystem.mount}")
    private String headerMount;
    @Value("${kvmspy.parser.filesystem.size}")
    private String headerSize;
    @Value("${kvmspy.parser.filesystem.used}")
    private String headerUsed;

    public Set<FileSystem> parse(List<String> lines) {
        Columniser columniser = new Columniser(lines)
                .headings(headerName, headerMount, headerSize, headerUsed)
                .analyse();

        Map<String, List<String>> columns = columniser.columniseWithHeadings();

        List<String> names = columns.get(headerName);
        List<String> mounts = columns.get(headerMount);
        List<String> sizes = columns.get(headerSize);
        List<String> useds = columns.get(headerUsed);

        Set<FileSystem> fileSystems = new HashSet<>();
        for (int index = 0; index < lines.size() - 1; index++) {
            FileSystem fileSystem = new FileSystem();
            String name = names.get(index);
            if (name.startsWith("/")) {
                fileSystem.setName(name);
                fileSystem.setMount(mounts.get(index));
                fileSystem.setSize(parseMiB(sizes.get(index), "kib"));
                fileSystem.setUsed(parseMiB(useds.get(index), "kib"));
                fileSystems.add(fileSystem);
            }
        }

        return fileSystems;
    }
}
