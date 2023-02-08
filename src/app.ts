import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.use(express.json()); //accept json

app.get("/", async (req, res, next) => {
  console.log("ping");
});

app.listen(3001, () => {
  console.log("server started");
});
