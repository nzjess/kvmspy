import React from "react";
import SnapshotSummariesList from "./containers/SnapshotSummariesList.jsx";
import SnapshotSummaryFilterControls from "./components/SnapshotSummaryFilterControls.jsx";
import DeProgress from "./lib/components/DeProgress.jsx"

const KvmSpyApp = () => (
    <div>
        <SnapshotSummariesList />
        <SnapshotSummaryFilterControls/>
        <DeProgress />
    </div>
)

export default KvmSpyApp
