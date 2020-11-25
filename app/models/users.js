const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
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
  breed: {
    type: String,
    trim: true,
    required: "Enter the breed of pet"
  },
  note: {
    type: String,
    trim: true,
  },
  size: {
    type: String,
    trim: true,
    required: "Enter the pets size. (sm, md, lg)"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
