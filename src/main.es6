/* eslint-disable no-console */

import "babel-regenerator-runtime";
import ci from "./circleci-client";

const debug = require("debug")("circleci-daily:main");

import projects from "../project-list.json";

module.exports.handler = function(_event, _context){
  (async function (){
    const res = await Promise.all(projects.map((project) => {
      debug("rebuild " + JSON.stringify(project));
      if(process.env.DRY === "true") return Promise.resolve("done");
      return ci.startBuild(project);
    }));

    console.log(res);
    if(_context) _context.done(null, "done");
  })().catch((err) => {
    console.error(err.stack || err);
    if(_context) _context.fail('failed');
  });

};
