import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducers";
import middlewere from "./middlewere";
import {BrowserRouter} from "react-router-dom";

const store = createStore(reducer,middlewere)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    , document.getElementById("root"));
