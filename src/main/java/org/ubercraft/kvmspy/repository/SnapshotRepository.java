package org.ubercraft.kvmspy.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.ubercraft.kvmspy.model.Snapshot;
import org.ubercraft.kvmspy.model.SnapshotSummary;

@Repository
public interface SnapshotRepository extends CrudRepository<Snapshot, Long> {

    public List<Snapshot> findByArchivedOrderByStartedAtDesc(boolean archived);

    public List<SnapshotSummary> findSummariesByArchivedOrderByStartedAtDesc(boolean archived);
}
