var path = require("path");
import React from "react";
import ReactDom from "react-dom/server";

import Root from "../react/Root";
import { Provider } from "react-redux";

import createStore from "../react/store";

function routeDefault(req, res, next) {
  res.redirect(302, "http://www.jd.com");
  return;
}

function routeMain(req, res, next) {
  var initialState = { appinfo: { userName: "我是好人" } };
  var store = createStore(initialState);
  var markup = ReactDom.renderToString(
    <Provider store={store}>
      <Root />
    </Provider>
  );

  res.render("template", {
    markup: markup,
    initialState: JSON.stringify(initialState)
  });
}

module.exports = {
  index: routeDefault,
  main: routeMain
};
