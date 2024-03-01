const express = require("express");
const register = require("./controllers/register");
const userRoute = express.Router();

userRoute.post("/register", register);
module.exports = userRoute;
