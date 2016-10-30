import {combineReducers} from "redux";
import snapshotSummaries from "./snapshotSummaries.jsx";
import snapshotSummariesFilter from "./snapshotSummariesFilter.jsx";
import snapshot from "./snapshot.jsx";

const kvmSpyApp = combineReducers({
    snapshotSummaries,
    snapshotSummariesFilter,
    snapshot
})

export default kvmSpyApp
