import React, {Component} from "react";
import Debar from "../lib/components/Debar.jsx";

class PhysicalMachine extends Component {

    render() {
        const {
            machine,
        } = this.props;

        let kvms = [];
        let start = 0;
        machine.kvmDomains.map(kvmDomain => {
            let end = start + kvmDomain.memory;
            kvms.push({
                id: kvmDomain.id,
                start: start,
                end: end,
                domain: kvmDomain.virtualMachine.domain
            })
            start = end;
        })

        return (
            <div>
                <Debar key={machine.id} color="rgb(212, 118, 0)" min={0} max={machine.memory} start={0}
                       end={machine.memory} label={machine.domain}/>
                {kvms.map(kvm =>
                    <Debar key={kvm.id} min={0} max={machine.memory} start={kvm.start} end={kvm.end}
                           label={kvm.domain}/>
                )}
            </div>
        );
    }
}

export default PhysicalMachine
