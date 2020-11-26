const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  ownerName: {
    type: String,
    trim: true,
    required: "Enter the owners name."
  },
  petName: {
    type: String,
    trim: true,
    required: "Enter the pets name."
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  checkIn: {
    type: Date,
    default: Date.now
  },
  checkOut: {
    type: Date,
    default: Date.now
  },
  note: {
    type: String,
    trim: true,
    default: "No special instructions",
  },

});

const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule;
