import CircleCI from "circleci";
require("dotenv").load({silent: true});

module.exports = new CircleCI({
  auth: process.env.CIRCLECI_TOKEN
});
