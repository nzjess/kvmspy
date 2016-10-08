package org.ubercraft.kvmspy.shell.jsch;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import com.jcraft.jsch.Channel;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.Session;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.ubercraft.kvmspy.shell.Command;
import org.ubercraft.kvmspy.shell.Shell;
import org.ubercraft.kvmspy.util.StopWatch;

@Component
public class JSchShell implements Shell {

    private final JSch jsch;
    private final String user;

    public class JschCommand implements Command {

        private final Session session;

        private final int prelude;
        private final int prompt;

        private JschCommand(String host) throws Exception {
            session = jsch.getSession(user, host, 22);
            session.setUserInfo(UserInfo.USER_INFO);
            session.connect(3000);

            prelude = countLines(shell(null));
            prompt = countLines(shell(""));
        }

        private int countLines(String string) {
            int count = 1;
            for (int i = 0; i < string.length(); i++) {
                if (string.charAt(i) == '\n') {
                    count++;
                }
            }
            return count;
        }

        public List<String> send(String command) throws Exception {
            String[] lines = shell(command).split("\\n");

            return Arrays.stream(lines, prompt - 1, lines.length - (prompt - prelude) + 1)
                         .map(line -> {
                             return StringUtils.stripEnd(line, null);
                         })
                         .collect(Collectors.toList());
        }

        private String shell(String command) throws Exception {
            Channel channel = session.openChannel("shell");

            ByteArrayOutputStream out = new ByteArrayOutputStream();
            channel.setOutputStream(out, true);

            command = (command != null) ? StringUtils.stripToEmpty(command) + "\n" : "";

            channel.setInputStream(new ByteArrayInputStream(command.getBytes("UTF-8")));
            channel.connect(3000);

            int size = 0;
            StopWatch changeTimer = new StopWatch();
            StopWatch timeoutTimer = new StopWatch();
            while (changeTimer.elapsed(TimeUnit.SECONDS) < 1 && timeoutTimer.elapsed(TimeUnit.SECONDS) < 5) {
                final int newSize = out.size();
                if (size == 0 || newSize > size) {
                    size = newSize;
                    changeTimer.reset();
                }
                Thread.sleep(500);
            }

            channel.disconnect();

            return new String(out.toByteArray(), "UTF-8");
        }

        @Override
        public void close() {
            session.disconnect();
        }
    }

    public JSchShell(@Value("${kvmspy.ssh.user}") String user, @Value("${kvmspy.ssh.identity}") String identity) throws Exception {
        this.jsch = new JSch();
        this.user = user;
        jsch.addIdentity(identity);
    }

    @Override
    public Command command(String host) throws Exception {
        return new JschCommand(host);
    }

    private static class UserInfo implements com.jcraft.jsch.UserInfo {

        private static final UserInfo USER_INFO = new UserInfo();

        public String getPassword() {
            return null;
        }

        public boolean promptYesNo(String str) {
            return true;
        }

        public String getPassphrase() {
            return null;
        }

        public boolean promptPassphrase(String message) {
            return false;
        }

        public boolean promptPassword(String message) {
            return false;
        }

        public void showMessage(String message) {
        }

        public String[] promptKeyboardInteractive(String destination,
                                                  String name,
                                                  String instruction,
                                                  String[] prompt,
                                                  boolean[] echo) {
            return null;
        }

    }
}
