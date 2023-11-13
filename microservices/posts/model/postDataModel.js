const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const PostsModel = mongoose.model("PostModel", PostSchema);

module.exports = { PostsModel };
