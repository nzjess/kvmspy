import {connect} from "react-redux";
import {setShowingSnapshotSummariesFilter} from "../actions/index.jsx";
import SnapshotSummaryFilterControl from "../components/SnapshotSummaryFilterControl.jsx";

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.snapshotSummariesFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setShowingSnapshotSummariesFilter(ownProps.filter))
        }
    }
}

const SnapshotSummariesFilterControl = connect(
    mapStateToProps,
    mapDispatchToProps
)(SnapshotSummaryFilterControl)

export default SnapshotSummariesFilterControl
