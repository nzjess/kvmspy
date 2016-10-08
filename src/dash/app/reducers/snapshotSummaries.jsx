const initialSnapshotSummaries = [
    {
        id: 1,
        text: "Apple",
        archived: false
    },
    {
        id: 2,
        text: "Orange",
        archived: true
    }
]

const snapshotSummary = (state = {}, action) => {
    switch (action.type) {
        case 'SHOW_SNAPSHOT_SUMMARY':
            if (state.id !== action.id) {
                return state
            }

            return Object.assign({}, state, {
                archived: !state.archived
            })

        default:
            return state
    }
}

const snapshotSummaries = (state = initialSnapshotSummaries, action) => {
    switch (action.type) {
        case 'SHOW_SNAPSHOT_SUMMARY':
            return state.map(s =>
                snapshotSummary(s, action)
            )

        default:
            return state
    }
}

export default snapshotSummaries
