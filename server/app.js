require("express-async-errors");
const express = require("express");
const errorHandler = require("./handlers/errorHandler");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/users/users.routes");
require("dotenv").config();
mongoose
  .connect(process.env.mongo_connection)
  .then(() => {
    console.log("Connection to DB successful");
  })
  .catch((e) => {
    console.log("Connetion to DB failed");
  });
require("./models/users.model");
app.use(express.json());
app.use(errorHandler);

//Routes
app.use("/api/users", userRoute);

app.listen(3000, () => {
  console.log("Server is running");
});
