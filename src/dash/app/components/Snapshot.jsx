import React from "react";
import {connect} from "react-redux";
import PhysicalMachine from "./PhysicalMachine.jsx";

let Snapshot = (snapshot) => (
    <div>
        {snapshot.physicalMachines.slice().sort(function (a, b) {
            return a.domain.localeCompare(b.domain);
        }).map(machine =>
            <PhysicalMachine key={"pm" + machine.id} machine={machine}/>
        )}
    </div>
)

const mapStateToProps = (state) => {
    return state.snapshot
}

Snapshot = connect(mapStateToProps)(Snapshot)

export default Snapshot
