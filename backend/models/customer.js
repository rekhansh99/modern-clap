const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customerSchema = {
  name: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  pendingRequests: [
    {
      type: Schema.Types.ObjectId,
      ref: "Request"
    }
  ],
  completedRequests: [
    {
      type: Schema.Types.ObjectId,
      ref: "Request"
    }
  ],
  cancelledRequests: [
    {
      type: Schema.Types.ObjectId,
      ref: "Request"
    }
  ],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Review'
    }
  ]
};

module.exports = mongoose.model("customer", customerSchema);
