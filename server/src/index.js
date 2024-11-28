const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Express backend");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at PORT ${port}`);
});
