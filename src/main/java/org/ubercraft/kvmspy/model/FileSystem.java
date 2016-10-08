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
@Table(name = "file_system")
public class FileSystem extends MachineComponent {

    @Column(name = "name")
    private String name;

    @Column(name = "mount")
    private String mount;

    @Column(name = "size_kib")
    private int sizeKib;

    @Column(name = "used_kib")
    private int usedKib;
}
