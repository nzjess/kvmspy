import React, {PropTypes} from "react";
import SnapshotSummary from "./SnapshotSummary.jsx";

const SnapshotSummaryList = ({snapshotSummaries, onSnapshotSummaryClick}) => (
    <ul>
        {snapshotSummaries.map(snapshotSummary =>
            <SnapshotSummary
                key={snapshotSummary.id}
                {...snapshotSummary}
                onClick={() => onSnapshotSummaryClick(snapshotSummary.id)}
            />
        )}
    </ul>
)

export default SnapshotSummaryList
