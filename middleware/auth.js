const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ message: "No token provided" });

  jwt.verify(token, process.env.JWT_SECRET || "secret123", (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid token" });
    req.adminId = decoded.id;
    next();
  });
};

module.exports = verifyToken;
