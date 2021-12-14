import mongoose from 'mongoose';

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

export default mongoose.model("userModel", userModel);