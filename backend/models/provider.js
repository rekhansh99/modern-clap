const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const providerSchema = new Schema(
  {
    ownerName: {
      type: String,
      required: true
    },
    ownerPhone: String,
    ownerEmail: {
      type: String,
      required: true
    },
    ownerMobile: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    businesses: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Busniess'
      }
    ],
    notifications: [
      {
        id: String,
        type: String,
        request: {
          type: Schema.Types.ObjectId,
          ref: 'Request'
        },
        message: String,
        seen: {
          type: Boolean,
          default: false
        }
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Provider', providerSchema);
