const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userDetail = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: true,
    
  },
  lastName: {
    type: String,
    trim: true,
    required: true
    
  },
  phoneNumber: {
    type: Number,
    required: true
    
  },
  emergencyNo: {
    type: Number,
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
