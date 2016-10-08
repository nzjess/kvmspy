package org.ubercraft.kvmspy.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@Entity
@Table(name = "network_interface")
public class NetworkInterface extends MachineComponent {

    @Column(name = "name")
    private String name;

    @Column(name = "inet")
    private String inet;

    @Column(name = "netmask")
    private String netmask;

    @Column(name = "broadcast")
    private String broadcast;

    @Column(name = "ether")
    private String ether;

    @Column(name = "flags")
    private String flags;
}
