import mongoose from 'mongoose';

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

export default mongoose.model("postModel", postModel);