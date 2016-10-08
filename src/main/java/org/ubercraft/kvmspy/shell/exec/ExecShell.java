package org.ubercraft.kvmspy.shell.exec;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Reader;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;
import org.ubercraft.kvmspy.shell.Command;
import org.ubercraft.kvmspy.shell.Shell;

@Primary
@Component
public class ExecShell implements Shell {

    private final String user;
    private final String identity;

    public ExecShell(@Value("${kvmspy.ssh.user}") String user, @Value("${kvmspy.ssh.identity}") String identity) {
        this.identity = identity;
        this.user = user;
    }

    @Override
    public Command command(String host) throws Exception {
        return new Command() {

            @Override
            public Reader send(String command) throws Exception {
                Process process = Runtime.getRuntime().exec(new String[]
                        {"ssh", "-i", identity,
                                "-oStrictHostKeyChecking=no",
                                "-oPreferredAuthentications=publickey",
                                user + "@" + host, "-C", command});

                process.waitFor();

                return new BufferedReader(new InputStreamReader(process.getInputStream(), "UTF-8"));
            }

            @Override
            public void close() throws IOException {
            }
        };
    }
}
