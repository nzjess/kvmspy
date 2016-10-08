package org.ubercraft.kvmspy.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@Entity
@DiscriminatorValue("VIRTUAL")
public class VirtualMachine extends Machine {

}
