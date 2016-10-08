import React from "react";
import SnapshotSummariesFilterControl from "../containers/SnapshotSummariesFilterControl.jsx";

const SnapshotSummaryFilterControls = () => (
    <p>
        <SnapshotSummariesFilterControl filter="SHOW_CURRENT">
            Current
        </SnapshotSummariesFilterControl>
        {", "}
        <SnapshotSummariesFilterControl filter="SHOW_ALL">
            All
        </SnapshotSummariesFilterControl>
        {", "}
        <SnapshotSummariesFilterControl filter="SHOW_ARCHIVED">
            Archived
        </SnapshotSummariesFilterControl>
    </p>
)

export default SnapshotSummaryFilterControls
