import React from "react";
import {render} from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import kvmSpyApp from "./reducers/index.jsx";
import KvmSpyApp from "./KvmSpyApp.jsx";

let store = createStore(kvmSpyApp)

render(
    <Provider store={store}>
        <KvmSpyApp />
    </Provider>,
    document.getElementById('app')
)
