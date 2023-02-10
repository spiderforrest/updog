import express from "express";
const { createMessage } = require('../services/crud');
const testRoute = express.Router();


testRoute.get("/:testMessage", async (req: any, res: any, next: any) => {
  const msg = req.params.testMessage;
  console.log(req.oidc.user.email);
  createMessage(res, req.oidc.user.email, "urmom", msg);
});

module.exports = testRoute
