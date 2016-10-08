package org.ubercraft.kvmspy.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@Entity
@Table(name = "domain_entry")
public class DomainEntry {

    @Id
    @Column(name = "domain")
    private String domain;

    @Column(name = "enabled")
    private boolean enabled;
}
