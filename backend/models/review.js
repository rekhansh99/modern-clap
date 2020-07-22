const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = {
  request: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Request'
  },
  toolsRating: {
    type: Number,
    min: 1,
    max: 5
  },
  workRating: {
    type: Number,
    min: 1,
    max: 5
  },
  behaviourRating: {
    type: Number,
    min: 1,
    max: 5
  },
  overallRating: {
    type: Number,
    min: 1,
    max: 5
  },
  message: String,
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer'
  },
  provider: {
    type: Schema.Types.ObjectId,
    ref: 'Provider'
  }
};

module.exports = mongoose.model('review', reviewSchema);