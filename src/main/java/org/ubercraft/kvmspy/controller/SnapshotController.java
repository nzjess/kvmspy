package org.ubercraft.kvmspy.controller;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;
import java.util.concurrent.CompletionService;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.task.TaskExecutor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.ubercraft.kvmspy.factory.MachineFactory;
import org.ubercraft.kvmspy.model.HostEntry;
import org.ubercraft.kvmspy.model.PhysicalMachine;
import org.ubercraft.kvmspy.model.Snapshot;
import org.ubercraft.kvmspy.model.SnapshotSummary;
import org.ubercraft.kvmspy.repository.HostEntryRepository;
import org.ubercraft.kvmspy.repository.SnapshotRepository;
import org.ubercraft.kvmspy.util.SnapshotSession;
import org.ubercraft.kvmspy.util.StopWatch;

@Controller
@RequestMapping(value = "/1.0/kvmspy", produces = "application/json")
public class SnapshotController {

    private static final Logger log = LoggerFactory.getLogger(SnapshotController.class);

    @Autowired
    private HostEntryRepository hostEntryRepository;

    @Autowired
    private SnapshotRepository snapshotRepository;

    @Autowired
    private TaskExecutor executor;

    @Autowired
    private CompletionService<Void> completionService;

    @Autowired
    private MachineFactory machineFactory;

    @ResponseBody
    @RequestMapping(value = "/snapshot/{snapshotId}", method = RequestMethod.GET)
    public Snapshot snapshot(@PathVariable Long snapshotId) {
        return snapshotRepository.findOne(snapshotId);
    }

    @ResponseBody
    @RequestMapping(value = "/snapshots", method = RequestMethod.GET)
    public List<Snapshot> snapshots(@RequestParam(name = "archived", required = false) String archived) {
        return snapshotRepository.findByArchivedOrderByStartedAtDesc(Boolean.parseBoolean(archived));
    }

    @ResponseBody
    @RequestMapping(value = "/snapshotSummaries", method = RequestMethod.GET)
    public List<SnapshotSummary> snapshotSummaries(@RequestParam(name = "archived", required = false) String archived) {
        return snapshotRepository.findSummariesByArchivedOrderByStartedAtDesc(Boolean.parseBoolean(archived));
    }

    @ResponseBody
    @RequestMapping(value = "/snapshot", method = RequestMethod.POST)
    public Snapshot snapshot() {
        final Snapshot newSnapshot = new Snapshot();
        newSnapshot.setStartedAt(LocalDateTime.now());

        final Long snapshotId = snapshotRepository.save(newSnapshot).getId();

        executor.execute(() -> {
            final SnapshotSession session = new SnapshotSession(snapshotRepository.findOne(snapshotId));

            Set<HostEntry> entries = hostEntryRepository.findAllEnabled();

            entries.forEach(entry -> {
                completionService.submit(() -> {
                    PhysicalMachine machine = machineFactory.createPhysicalMachine(session, entry.getHostname());
                    session.getSnapshot().getPhysicalMachines().add(machine);
                    return null;
                });
            });

            try {
                int count = 0;
                StopWatch timer = new StopWatch();
                while (count != entries.size() && timer.elapsed(TimeUnit.SECONDS) < 300) {
                    Future<Void> future = completionService.poll(1000, TimeUnit.SECONDS);
                    if (future != null) {
                        try {
                            future.get();
                        }
                        catch (Exception e) {
                            log.error("failure completing host entry", e);
                        }
                        count++;
                    }
                }

                if (count != entries.size()) {
                    log.error("timeout completing host entries");
                }
            }
            catch (Exception e) {
                log.error("failure completing host entries", e);
            }
            finally {
                session.close();
            }

            snapshotRepository.save(session.getSnapshot());
        });

        return snapshotRepository.findOne(snapshotId);
    }
}
