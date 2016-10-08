package org.ubercraft.kvmspy.model;

import javax.persistence.MappedSuperclass;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@MappedSuperclass
public abstract class KvmComponent extends SnapshotComponent {

}
