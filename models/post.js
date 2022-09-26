const { Schema } = require("mongoose");

const Post = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = Post;
