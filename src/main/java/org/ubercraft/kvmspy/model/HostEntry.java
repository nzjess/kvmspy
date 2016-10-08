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
@Table(name = "host_entry")
public class HostEntry {

    @Id
    @Column(name = "domain")
    private String domain;

    @Column(name = "host")
    private String host;

    @Column(name = "ipv4")
    private String ipv4;

    @Column(name = "enabled")
    private boolean enabled;
}
