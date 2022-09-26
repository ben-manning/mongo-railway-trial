const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const cors = require("cors");
const db = require("./db");
const { Post } = require("./models");

app.use(cors());
app.get("/posts", async (req, res) => {
  const posts = await Post.find({});
  res.json(posts);
});

app.listen(PORT, () => {
  console.log("the server is running");
});
