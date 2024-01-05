import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema({
  modelId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Model', // Reference to your Model model (adjust the name if needed)
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User', // Reference to your User model (adjust the name if needed)
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Rating = mongoose.model('Rating', ratingSchema);

export default Rating;
