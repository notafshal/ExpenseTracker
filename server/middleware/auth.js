const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const accessToken = req.headers.authorization.replace("Bearer ", "");
  try {
    const jwtVerification = jwt.verify(accessToken, process.env.jwt_salt);
    req.user = jwtVerification;
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: "Unauthorized",
    });
  }

  next();
};
module.exports = auth;
