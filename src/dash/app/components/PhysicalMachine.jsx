import React, {Component} from "react";
import Paper from "material-ui/Paper";
import Debar from "../lib/components/Debar.jsx";

function label(domain, memory) {
    return Math.ceil(memory / (1024 * 1024)) + "Gb" + ": " + domain;
}

class PhysicalMachine extends Component {

    render() {
        const {
            machine,
        } = this.props;

        let kvms = [];

        machine.kvmDomains.map(kvm => {
            kvms.push({
                id: kvm.id,
                label: label(kvm.virtualMachine.domain, kvm.memory),
                memory: kvm.memory,
                state: kvm.state
            })
        })

        let total = 0;
        kvms.filter(function running(kvm) {
            return kvm.state == "running"
        }).map(kvm => {
            total += kvm.memory
        });
        let max = Math.max(machine.memory, total);

        kvms.sort(function (a, b) {
            return a.memory - b.memory;
        });

        let start = 0;
        kvms.filter(function running(kvm) {
            return kvm.state == "running"
        }).map(kvm => {
            let end = start + kvm.memory;
            kvm.start = start;
            kvm.end = end;
            start = end;
        })

        return (
            <Paper zDepth={4} style={{marginBottom: '50px'}}>
                <Debar key={"mm" + machine.id}
                       background="linear-gradient(to bottom, rgb(248,128,102) 0%, rgb(255,0,29) 100%)"
                       barBackground="linear-gradient(to bottom, rgb(122,188,255) 0%, rgb(64,150,238) 100%)"
                       min={0} max={max} start={0} end={machine.memory}
                       label={label(machine.domain, machine.memory)} labelMargin={5} labelBold={true}/>

                {kvms.filter(function running(kvm) {
                    return kvm.state == "running"
                }).map(kvm =>
                    <Debar key={"mk" + kvm.id} color="rgb(120,208,252)"
                           min={0} max={max} start={kvm.start} end={kvm.end}
                           label={kvm.label} labelMargin={20}/>
                )}

                {kvms.filter(function running(kvm) {
                    return kvm.state != "running"
                }).map(kvm =>
                    <Debar key={"mk" + kvm.id} color="rgb(148,148,148)"
                           min={0} max={max} start={0} end={kvm.memory}
                           label={kvm.label} labelMargin={20}/>
                )}

                <Debar key={"mmt"} color="rgb(212,212,212)"
                       min={0} max={max} start={0} end={total}
                       label={label("Total Allocated", total)} labelMargin={5}/>
            </Paper>
        );
    }
}

export default PhysicalMachine
