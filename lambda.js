require("source-map-support/register");
const serverlessExpress = require("@vendia/serverless-express");
const app = require("./src/index");

exports.handler = serverlessExpress({ app });
