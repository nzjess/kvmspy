import React from "react";

const SnapshotSummary = ({onClick, archived, text}) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: archived ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
)

export default SnapshotSummary
