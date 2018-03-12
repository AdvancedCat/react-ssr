var path = require('path')
var React = require("react");
var Item = require("../react/components/Item");
import { renderToString } from "react-dom/server";

function routeDefault(req, res, next) {
  res.redirect(302, "http://www.jd.com");
  return;
}

function routeMain(req, res, next) {
  //   res.render("index", { title: "JD Shop", locals: JSON.stringify(res.locals) });

  // var props = {initialCount:7}
  // var markup = renderToString(<Item {...props} />);
  
  // res.render("template", {
  //   markup: markup,
  //   jsonifiedProps: JSON.stringify(props)
  // });

  res.sendFile(path.join(__dirname, '..', '/index.html'))
}

module.exports = {
  index: routeDefault,
  main: routeMain
};
