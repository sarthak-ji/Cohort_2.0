const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: [true, "Username already exists"],
  },

  email: {
    type: String,
    required: [true, "email is required"],
    unique: [true, "email already exists"],
  },

  password: {
    type: String,
    required: [true, "Password is required"],
  },

  bio: String,

  profile_pic: {
    type: String,
    default: "https://icagallery.com/uploads/dummy.png",
  },
});


const userModel = mongoose.model("users", userSchema);


module.exports = userModel;