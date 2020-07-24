const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: {
    type: String
  },
  mobile: {
    type: String,
    required: true
  },
  otp: String,
  otpSent: Boolean,
  otpTime: Date,
  pendingRequests: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Request'
    }
  ],
  completedRequests: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Request'
    }
  ],
  cancelledRequests: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Request'
    }
  ],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Review'
    }
  ]
});

module.exports = mongoose.model('Customer', customerSchema);
