const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please provide your Name"],
  },
  email: {
    type: String,
    require: [true, "Please provide your email"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Please provide your Password"],
  },
  balance: {
    type: Number,
    require: [true, "Balance is required"],
    default: 0,
  },
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
