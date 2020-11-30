const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const petSchema = new Schema ({
  petName: {
    type: String,
    trim: true,
    required: "Enter the pets name.",
  },
  breed: {
    type: String,
    trim: true,
    required: "Enter the breed of pet",
  },
  size: {
    type: String,
    trim: true,
    required: "Enter the pets size. (sm, md, lg)",
  },
  note: {
    type: String,
    trim: true,
    default: "No special instructions",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Pets = mongoose.model("Pets", petSchema);

module.exports = Pets;


