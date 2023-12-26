const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  // Post content
  postText: {
    type: String,
    required: true,
  },
  image: {
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  // Timestamp of post creation
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
