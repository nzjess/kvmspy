import React from "react";
import SnapshotSummariesList from "./containers/SnapshotSummariesList.jsx";
import SnapshotSummaryFilterControls from "./components/SnapshotSummaryFilterControls.jsx";

const KvmSpyApp = () => (
    <div>
        <SnapshotSummariesList />
        <SnapshotSummaryFilterControls/>
    </div>
)

export default KvmSpyApp
