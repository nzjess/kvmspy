import React from "react";
import SnapshotSummariesList from "./containers/SnapshotSummariesList.jsx";
import SnapshotSummaryFilterControls from "./components/SnapshotSummaryFilterControls.jsx";
import Waterfall from "./lib/components/Waterfall.jsx"

const KvmSpyApp = () => (
    <div>
        <SnapshotSummariesList />
        <SnapshotSummaryFilterControls/>
        <Waterfall min={0} max={100} start={30} end={55} label="/var/lib/libvirt/images"/>
    </div>
)

export default KvmSpyApp
