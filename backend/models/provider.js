const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const providerSchema = new Schema(
  {
    ownerName: {
      type: String,
      required: true
    },
    ownerPhone: String,
    ownerPhoneVerified: {
      type: Boolean,
      default: false
    },
    ownerEmail: {
      type: String,
      required: true
    },
    ownerEmailVerified: {
      type: Boolean,
      default: false
    },
    ownerMobile: {
      type: String,
      required: true
    },
    ownerMobileVerified: {
      type: Boolean,
      default: false
    },
    password: {
      type: String,
      required: true
    },
    country: {
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
