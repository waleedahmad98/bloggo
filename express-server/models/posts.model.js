var mongoose = require('mongoose');

const postModel = new mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },

  body: {
    type: String
  },

  image: {
    type: String
  },

  author: {
    type: String
  }
});

module.exports = mongoose.model("postModel", postModel);