const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userDetail = new Schema({
  fullName: {
    type: String,
    trim: true,
    required: true,
  },
  phoneNumber: {
    type: String,
    decimal: false,
    required: true
    
  },
  emergencyNo: {
    type: String,
    decimal: false,
    required: true
    
  },
  emailAddress: {
    type: String,
    required:true
  },
  userPassword: {
    type: String,
    required:true
  }

});

const User = mongoose.model("User", userDetail);

module.exports = User;
