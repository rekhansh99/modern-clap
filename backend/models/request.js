const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const requestSchema = new Schema(
  {
    // _id: {
    //   type: String,
    //   required: true
    // },
    services: [
      {
        service: {
          type: Schema.Types.ObjectId,
          ref: 'Service'
        },
        staffsAssigned: [
          {
            type: Schema.Types.ObjectId,
            ref: 'Staff'
          }
        ]
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
        type: String, // pending completed
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
      }
    },
    status: {
      customer: {
        type: String, // pending upcoming ongoing completed cancelled
        required: true,
        default: 'pending'
      },
      business: {
        type: String, // recieved missed accepted ongoing completed
        required: true,
        defualt: 'received'
      }
    },
    review: {
      type: Schema.Types.ObjectId,
      ref: 'Review'
    },
    customer: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Customer'
    },
    business: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Business'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Request', requestSchema);
