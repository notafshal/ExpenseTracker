const mongoose = require("mongoose");
const userDashBoard = async (req, res) => {
  const userModel = mongoose.model("users");
  const getUser = await userModel
    .findOne({
      _id: req.user._id,
    })
    .select("-password");

  res.status(200).json({
    status: "hello from userDashboard",
    data: getUser,
  });
};
module.exports = userDashBoard;
