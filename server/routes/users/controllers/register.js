const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtManager = require("../../../managers/jwtManager");

const register = async (req, res) => {
  const userModel = mongoose.model("users");

  const { email, password, confirm_password, name, balance } = req.body;

  if (!email || !password || !name) throw "missing credentials";
  if (password.length < 5) throw "Password must be atleast 5 characters";
  if (password !== confirm_password) throw "two password doesnt match";
  const getDuplicateEmail = await userModel.findOne({
    email: email,
  });

  if (getDuplicateEmail) throw "this email exists";
  const hashedPassword = await bcrypt.hash(password, 12);
  const createdUser = await userModel.create({
    name: name,
    email: email,
    password: hashedPassword,
    balance: balance,
  });
  const accessToken = jwtManager(createdUser);
  res.status(200).json({
    message: "User Registered Successfully",
    accessToken: accessToken,
  });
};
module.exports = register;
