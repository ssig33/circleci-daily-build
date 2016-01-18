"use strict";

import "babel-polyfill";
import co from "co";
import ci from "./circleci-client";

const debug = require("debug")("circleci-daily:main");

const projects = [
  {
    username: "shokai",
    project: "weather-yahoo-jp",
    branch: "master"
  },
  {
    username: "shokai",
    project: "neoyokohama-bot",
    branch: "master"
  }
];

module.exports.handler = function(_event, _context){
  co(function *(){
    const res = yield projects.map((project) => {
      debug("rebuild " + JSON.stringify(project));
      if(process.env.DRY === "true") return Promise.resolve("done");
      return ci.startBuild(project);
    });

    console.log(res);
    if(_context) _context.done(null, "done");
  }).catch((err) => {
    console.error(err.stack || err);
    if(_context) _context.fail('failed');
  });

};
