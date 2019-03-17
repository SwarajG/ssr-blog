import mongoose from 'mongoose';

const like = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  blogId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default like;