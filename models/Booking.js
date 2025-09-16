const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  service: { type: String, required: true },
  user: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Booking", BookingSchema);
