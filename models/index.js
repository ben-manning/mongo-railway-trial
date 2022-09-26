const mongoose = require("mongoose");
const PostSchema = require("./post");

const Post = mongoose.model("Post", PostSchema);

module.exports = {
  Post
};
