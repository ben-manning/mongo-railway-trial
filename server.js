const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const db = require("./db");
const { Post } = require("./models");

app.get("/", (req, res) => {
  res.send("You have reached the root route.");
});

app.listen(PORT, () => {
  console.log("the server is running");
});
