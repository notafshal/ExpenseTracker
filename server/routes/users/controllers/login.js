const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtManager = require("../../../managers/jwtManager");

const login = async (req, res) => {
  const userModel = mongoose.model("users");
  const { email, password } = req.body;
  const getUser = await userModel.findOne({
    email: email,
  });
  if (!getUser) throw "This email doesnot exist in our system";
  const comparePassword = await bcrypt.compare(password, getUser.password);
  if (!comparePassword) throw "Email and password doesn't match";

  const accessToken = jwtManager(getUser);

  res.status(200).json({
    status: "success",
    message: "user login successfully",
    accessTOken: accessToken,
  });
};
module.exports = login;
