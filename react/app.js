import React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";

import Root from "./Root";
import "normalize.css";
import "./sass/index.scss";

import createStore from "./store";

const store = createStore($.extend({}, window.__INITIAL_STATE__ || {}));
const rootEle = document.getElementById("root");

hydrate(
  <Provider store={store}>
    <Root />
  </Provider>,
  rootEle
);
