package org.ubercraft.kvmspy.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.ubercraft.kvmspy.model.DomainEntry;

@Repository
public interface DomainEntryRepository extends CrudRepository<DomainEntry, Long> {

    @Query("select d from DomainEntry d where d.enabled = true")
    public Set<DomainEntry> findAllEnabled();
}
