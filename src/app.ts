import express, { Express, Request, Response } from "express";

const authRoute = require("./route/auth");

const app: Express = express();

app.use(express.json()); //accept json

app.get("/", async (req, res, next) => {
  console.log("ping");
});

app.get("/dingus", async (req, res, next) => {
  console.log("pingus");
});

app.use("/auth", authRoute);

app.listen(3001, () => {
  console.log("server started");
});
