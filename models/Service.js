const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: Number
});

module.exports = mongoose.model("Service", ServiceSchema);
