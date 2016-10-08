import {combineReducers} from "redux";
import snapshotSummaries from "./snapshotSummaries.jsx";
import snapshotSummariesFilter from "./snapshotSummariesFilter.jsx";

const kvmSpyApp = combineReducers({
    snapshotSummaries,
    snapshotSummariesFilter
})

export default kvmSpyApp
