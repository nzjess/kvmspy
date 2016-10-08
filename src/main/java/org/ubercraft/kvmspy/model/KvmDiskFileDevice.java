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

    @Column(name = "dev")
    private String dev;

    @Column(name = "source")
    private String source;
}
