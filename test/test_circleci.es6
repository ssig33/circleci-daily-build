/* global describe it */
"use strict";

import "./test_helper";
import {assert} from "chai";

import ci from "../src/circleci-client";

describe("CircleCI", function(){

  it("should have valid token", function(){
    return ci
      .getUser()
      .then((user) => {
        assert.isString(user.login);
        console.log(`login as ${user.login}`);
      });
  });

});
