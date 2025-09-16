const express = require("express");
const router = express.Router();
const Service = require("../models/Service"); // match exact filename

// Example route: Get all services
router.get("/", async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
