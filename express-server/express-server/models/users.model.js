var mongoose = require('mongoose');

const userModel = new mongoose.Schema({
  email: {
    type: String
  },
  username: {
    type: String
  },

  password: {
    type: String
  },

  salt: {
    type: String
  }
});

module.exports = mongoose.model("userModel", userModel);