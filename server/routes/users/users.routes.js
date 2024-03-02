const express = require("express");
const register = require("./controllers/register");
const login = require("./controllers/login");
const userDashBoard = require("./controllers/userDashboard");
const auth = require("../../middleware/auth");
const userRoute = express.Router();

userRoute.post("/register", register);
userRoute.post("/login", login);
userRoute.use(auth);
userRoute.get("/dashboard", userDashBoard);

module.exports = userRoute;
