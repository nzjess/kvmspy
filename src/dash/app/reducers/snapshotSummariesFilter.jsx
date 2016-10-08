const snapshotSummariesFilter = (state = 'SHOW_CURRENT', action) => {
    switch (action.type) {
        case 'SET_SHOWING_SNAPSHOT_SUMMARIES_FILTER':
            return action.filter
        default:
            return state
    }
}

export default snapshotSummariesFilter
