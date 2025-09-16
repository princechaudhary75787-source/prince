const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking"); // match exact filename

// Example route: Get all bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
