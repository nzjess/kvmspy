package org.ubercraft.kvmspy.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.Set;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@Entity
@Table(name = "kvm_domain")
public class KvmDomain extends SnapshotComponent {

    @Column(name = "memory")
    private Integer memory;

    @Column(name = "cpus")
    private Integer cpus;

    @Column(name = "cpu_model")
    private String cpuModel;

    @Column(name = "os_arch")
    private String osArch;

    @Column(name = "os_machine")
    private String osMachine;

    @Column(name = "os_type")
    private String osType;

    @ManyToOne(cascade = CascadeType.ALL, optional = false)
    @JoinColumn(name = "virtual_machine_id", nullable = false)
    private VirtualMachine virtualMachine;

    @Column(name = "state")
    private String state;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, orphanRemoval = true)
    @JoinColumn(name = "kvm_domain_id", nullable = false)
    private Set<KvmDiskFileDevice> kvmDiskFileDevices;

    @Column(name = "error")
    private boolean error;

    @Override
    public String name() {
        return (virtualMachine == null)
                ? super.name()
                : super.name() + " (" + virtualMachine.name() + ")";
    }
}
