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
@Table(name = "kvm_disk_file_device")
public class KvmDiskFileDevice extends KvmComponent {

    @Column(name = "source")
    private String source;

    @Column(name = "driver_name")
    private String driverName;

    @Column(name = "driver_type")
    private String driverType;

    @Column(name = "dev")
    private String dev;

    @Column(name = "bus")
    private String bus;
}
