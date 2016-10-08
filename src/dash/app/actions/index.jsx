export const setShowingSnapshotSummariesFilter = (filter) => {
    return {
        type: 'SET_SHOWING_SNAPSHOT_SUMMARIES_FILTER',
        filter
    }
}

export const showSnapshotSummary = (id) => {
    return {
        type: 'SHOW_SNAPSHOT_SUMMARY',
        id
    }
}