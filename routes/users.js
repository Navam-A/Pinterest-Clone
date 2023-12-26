const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

// Connect to MongoDB database
mongoose.connect("mongodb://127.0.0.1:27017/pinterestDB");

// Define User Schema
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  profileImage: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
  },
});

userSchema.plugin(plm);

// Export User model
module.exports = mongoose.model("User", userSchema);
