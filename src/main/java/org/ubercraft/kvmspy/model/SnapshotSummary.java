package org.ubercraft.kvmspy.model;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

// #hack: fixed in spring-data-commons 1.13.0 - https://jira.spring.io/browse/DATACMNS-909
@JsonIgnoreProperties("decoratedClass")
public interface SnapshotSummary {

    Long getId();

    LocalDateTime getStartedAt();

    LocalDateTime getFinishedAt();

    boolean isArchived();
}
