package org.ubercraft.kvmspy.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.ubercraft.kvmspy.model.HostEntry;

@Repository
public interface HostEntryRepository extends CrudRepository<HostEntry, Long> {

    @Query("select h from HostEntry h where h.enabled = true")
    public Set<HostEntry> findAllEnabled();
}
