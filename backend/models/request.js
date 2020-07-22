const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const requestSchema = {
  services: [
    {
      service: {
        type: Schema.Types.ObjectId,
        ref: "Service"
      },
      staffsAssigned: [
        {
          type: Schema.Types.ObjectId,
          ref: "Staff"
        }
      ],
      review: {
        type: Schema.Types.ObjectId,
        ref: "Review"
      }
    }
  ],
  time: {
    type: Date,
    required: true
  },
  location: {
    flatNo: String,
    building: String,
    area: String,
    landmark: String,
    addressType: String
  },
  payment: {
    mode: {
      type: String,
      required: true
    },
    subtotal: {
      type: Number,
      required: true
    },
    vat: {
      type: Number,
      required: true
    },
    discount: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      required: true
    }
  },
  status: {
    type: String,
    required: true
  }
};

module.exports = mongoose.model("request", requestSchema);
