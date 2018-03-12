"use strict";

function headerParser(req, res, next) {
  req.params.activityBu = req.params[0];
  req.params.activityType = req.params[1];
  req.params.activityEncodedId = req.params[2];

  let userAgent = req.get("User-Agent").toLowerCase() || "";
  let uaArr = userAgent.split(";");

  var isJdApp =
    uaArr[0].indexOf("jdapp") !== -1 &&
    userAgent.indexOf("pap/ja2017_313800") == -1;
  var isYhdApp =
    userAgent.indexOf("pap/ja2017_313800") > -1 || uaArr[0] == "yhdapp";

  var ips = (req.headers["j-forwarded-for"] || "").split(",").reverse();
  var clienIp = ips.pop();

  res.locals.isJdApp = isJdApp;
  res.locals.isYhdApp = isYhdApp;
  res.locals.userAgent = userAgent;
  res.locals.ip = clienIp;

  var app = {
    channel: req.params[0],
    ua: userAgent
  };

  res.locals.app = app;
  //onsole.log(res.locals)

  next();
}

module.exports = headerParser;
