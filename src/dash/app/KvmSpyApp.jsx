import React from "react";
import SnapshotSummariesList from "./containers/SnapshotSummariesList.jsx";
import SnapshotSummaryFilterControls from "./components/SnapshotSummaryFilterControls.jsx";
import Snapshot from "./components/Snapshot.jsx";

const KvmSpyApp = () => (
    <div>
        <SnapshotSummariesList />
        <SnapshotSummaryFilterControls/>
        <Snapshot/>
    </div>
)

export default KvmSpyApp
