package org.ubercraft.kvmspy.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.ubercraft.kvmspy.model.SnapshotComponent;

@Repository
public interface SnapshotComponentRepository extends CrudRepository<SnapshotComponent, Long> {
}
