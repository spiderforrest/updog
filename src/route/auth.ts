const express = require("express");
const passport = require("passport");
const Router = express.Router();

Router.get("/", async (req: any, res: any, next: any) => {
  console.log("auth");
});

module.exports = Router;
