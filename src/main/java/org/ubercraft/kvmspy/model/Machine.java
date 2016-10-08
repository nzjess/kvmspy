package org.ubercraft.kvmspy.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.Set;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "machine")
@DiscriminatorColumn(name = "type")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public abstract class Machine extends SnapshotComponent {

    @Column(name = "domain")
    private String domain;

    @Column(name = "host")
    private String host;

    @Column(name = "ipv4")
    private String ipv4;

    @Column(name = "hostname")
    private String hostname;

    @Column(name = "memory")
    private Integer memory;

    @Column(name = "swap")
    private Integer swap;

    @Column(name = "cpus")
    private Integer cpus;

    @Column(name = "timezone")
    private String timezone;

    @Column(name = "uname")
    private String uname;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, orphanRemoval = true)
    @JoinColumn(name = "machine_id", nullable = false)
    private Set<FileSystem> fileSystems;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, orphanRemoval = true)
    @JoinColumn(name = "machine_id", nullable = false)
    private Set<NetworkInterface> networkInterfaces;

    @Column(name = "error")
    private boolean error;

    @Override
    public String name() {
        return (domain == null)
                ? super.name()
                : super.name() + " (" + domain + ")";
    }
}
