const express = require("express");
const app: express.Application = express();

app.use(express.json()); //accept json

app.get("/", async (req, res, next) => {
  console.log("ping");
  console.log("ping");
  res.send("hiiii\n");
});

app.listen(3001, () => {
  console.log("server started");
});
