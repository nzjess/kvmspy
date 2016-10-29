import React from "react";
import {render} from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import KvmSpyApp from "./KvmSpyApp.jsx";
import kvmSpyApp from "./reducers/index.jsx";

let store = createStore(kvmSpyApp)

render(
    <MuiThemeProvider>
        <Provider store={store}>
            <KvmSpyApp />
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('app')
)
