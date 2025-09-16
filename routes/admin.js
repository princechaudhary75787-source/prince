const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin"); // match exact filename

// Example route: Get all admins
router.get("/", async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
