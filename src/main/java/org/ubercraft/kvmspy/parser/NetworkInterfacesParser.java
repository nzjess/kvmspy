package org.ubercraft.kvmspy.parser;

import static java.util.regex.Pattern.CASE_INSENSITIVE;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;
import org.ubercraft.kvmspy.model.NetworkInterface;

@Component
public class NetworkInterfacesParser {

    private static final Pattern namePattern = Pattern.compile("^(.+):\\s+flags=\\d+<(.+)>\\s+mtu\\s\\d+$", CASE_INSENSITIVE);

    private static final Pattern inetPattern = Pattern.compile("^.*\\s+inet\\s+([a-f0-9x\\.]+).*$", CASE_INSENSITIVE);
    private static final Pattern netmaskPattern = Pattern.compile("^.*\\s+netmask\\s+([a-f0-9x\\.]+).*$", CASE_INSENSITIVE);
    private static final Pattern broadcastPattern = Pattern.compile("^.*\\s+broadcast\\s+([a-f0-9x\\.]+).*$", CASE_INSENSITIVE);

    private static final Pattern etherPattern = Pattern.compile("^.*\\s+ether\\s+(..:..:..:..:..:..).*$", CASE_INSENSITIVE);

    public Set<NetworkInterface> parse(List<String> lines) {
        Set<NetworkInterface> networkInterfaces = new HashSet<>();

        NetworkInterface networkInterface = null;
        for (String line : lines) {
            Matcher nameMatcher = namePattern.matcher(line);
            if (nameMatcher.matches()) {
                add(networkInterface, networkInterfaces);
                networkInterface = new NetworkInterface();
                networkInterface.setName(nameMatcher.group(1));
                networkInterface.setFlags(nameMatcher.group(2));
            }
            else if (networkInterface != null) {
                Matcher inetMatcher = inetPattern.matcher(line);
                if (inetMatcher.matches()) {
                    networkInterface.setInet(inetMatcher.group(1));
                }
                Matcher netmaskMatcher = netmaskPattern.matcher(line);
                if (netmaskMatcher.matches()) {
                    networkInterface.setNetmask(netmaskMatcher.group(1));
                }
                Matcher broadcastMatcher = broadcastPattern.matcher(line);
                if (broadcastMatcher.matches()) {
                    networkInterface.setBroadcast(broadcastMatcher.group(1));
                }
                Matcher etherMatcher = etherPattern.matcher(line);
                if (etherMatcher.matches()) {
                    networkInterface.setEther(etherMatcher.group(1));
                }
            }
        }
        add(networkInterface, networkInterfaces);

        return networkInterfaces;
    }

    private static void add(NetworkInterface networkInterface, Set<NetworkInterface> networkInterfaces) {
        if (networkInterface != null) {
            if (networkInterface.getInet() != null && !"127.0.0.1".equals(networkInterface.getInet())) {
                networkInterface.setInet(toDecimalQuartet(networkInterface.getInet()));
                networkInterface.setNetmask(toDecimalQuartet(networkInterface.getNetmask()));
                networkInterface.setBroadcast(toDecimalQuartet(networkInterface.getBroadcast()));
                networkInterface.setFlags(toPipeDelimitedFlags(networkInterface.getFlags()));
                networkInterfaces.add(networkInterface);
            }
        }
    }

    private static String toDecimalQuartet(String string) {
        if (string != null) {
            if (string.toLowerCase().startsWith("0x")) {
                final long bits = Long.parseLong(string.substring(2), 16);
                string = ((bits >> 24) & 0xFF) + "." +
                        ((bits >> 16) & 0xFF) + "." +
                        ((bits >> 8) & 0xFF) + "." +
                        (bits & 0xFF);
            }
        }
        return string;
    }

    private static String toPipeDelimitedFlags(String flags) {
        if (flags != null) {
            flags = Arrays.stream(flags.split("\\,")).collect(Collectors.joining("|", "|", "|"));
        }
        return flags;
    }
}
