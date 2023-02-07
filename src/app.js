const express = require("express");
const app = express();
app.use(express.json()); //accept json

app.get("/", async (req, res, next) => {
  console.log("ping");
  res.send("hiiii\n");
});

app.listen(3001, () => {
  console.log("server started");
});
