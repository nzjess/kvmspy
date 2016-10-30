import React from "react";
import {connect} from "react-redux";
import PhysicalMachine from "./PhysicalMachine.jsx";

let Snapshot = (snapshot) => (
    <div>
        {snapshot.physicalMachines.map(machine =>
            <PhysicalMachine key={machine.id} machine={machine} />
        )}
    </div>
)

const mapStateToProps = (state) => {
    return state.snapshot
}

Snapshot = connect(mapStateToProps)(Snapshot)

export default Snapshot
