const mongoose = require("mongoose");

const TripScheme = new mongoose.Schema({
  places: {
    type: Array,
  },
  count: {
    type: Number,
  },
  budget: {
    type: Number,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  contact: {
    type: Number,
  },
  days: {
    type: Number,
  },
});

module.exports = mongoose.model.Users || mongoose.model("Trips", TripScheme);
