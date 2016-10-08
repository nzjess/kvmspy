import {connect} from "react-redux";
import {showSnapshotSummary} from "../actions/index.jsx";
import SnapshotSummaryList from "../components/SnapshotSummaryList.jsx";

const getShowingSnapshotSummaries = (snapshotSummaries, filter) => {
    switch (filter) {
        case 'SHOW_CURRENT':
            return snapshotSummaries.filter(s => !s.archived)
        case 'SHOW_ALL':
            return snapshotSummaries
        case 'SHOW_ARCHIVED':
            return snapshotSummaries.filter(s => s.archived)
    }
}

const mapStateToProps = (state) => {
    return {
        snapshotSummaries: getShowingSnapshotSummaries(state.snapshotSummaries, state.snapshotSummariesFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSnapshotSummaryClick: (id) => {
            dispatch(showSnapshotSummary(id))
        }
    }
}

const SnapshotSummariesList = connect(
    mapStateToProps,
    mapDispatchToProps
)(SnapshotSummaryList)

export default SnapshotSummariesList
