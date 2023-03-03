const mongoose = require("mongoose");
// const { isEmail } = require('validator');
// const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    // required: true,
    // default: null,
  },
  dateOFbirth: {
    type: Date,
    // required: true,
  },
  adress: {
    type: String,
    // required: true,
  },
  country: {
    type: String,
    // required: true,
    // default: 'unspecified',
  },
  email: {
    type: String,
    // required:true,
    unique: true,
  },
  position: {
    type: String,
    // required: true,
  },
  service: {
    type: String,
  },
  // rank: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Rank'
  // }
}, {timestamps: true});

module.exports = mongoose.model("users", userSchema); 