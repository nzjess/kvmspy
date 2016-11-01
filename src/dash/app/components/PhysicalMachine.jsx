import React, {Component} from "react";
import Paper from "material-ui/Paper";
import Debar from "../lib/components/Debar.jsx";

const GB = (1024 * 1024);

function gb(memory) {
    return Math.ceil(memory / GB) + "Gb";
}
function label(domain, memory, total) {
    return gb(memory) + ": " + domain +
        (total ? (" (" + gb(total) + " used)") : "");
}

class PhysicalMachine extends Component {

    render() {
        const {
            machine,
        } = this.props;

        let kvms = [];
        let memory = machine.memory - (2 * GB);

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
        let max = Math.max(memory, total);
        let min = Math.min(memory, total);

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

        let background = "linear-gradient(to right, rgb(64,150,238) "
        if (total > memory) {
            let to = Math.min((1 - ((total - memory) / total)) * 100, 100);
            background += to + "%, rgb(255,0,29) 100%)"
        }
        else {
            let to = Math.min((1 - ((memory - total) / memory)) * 100, 100);
            background += to + "%, rgb(29,255,0) 100%)"
        }

        return (
            <Paper zDepth={4} style={{marginBottom: '50px'}}>
                <Debar key={"mm" + machine.id}
                       background={background} color="rgb(64,150,238)"
                       min={0} max={max} start={0} end={min}
                       label={label(machine.domain, memory, total)}
                       labelMargin={5} labelBold={true}/>

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
                    <Debar key={"mk" + kvm.id}
                           backgroundColor="rgb(158,158,158)" color="rgb(128,128,128)"
                           min={0} max={max} start={0} end={kvm.memory}
                           label={kvm.label} labelMargin={20}/>
                )}
            </Paper>
        );
    }
}

export default PhysicalMachine
