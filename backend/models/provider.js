const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const providerSchema = new Schema({
  ownerName: {
    type: String,
    required: true
  },
  ownerEmail: {
    type: String,
    required: true
  },
  ownerMobile: {
    type: String,
    required: true
  },
  ownerPhone: {
    type: String
  },
  country: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  tradeLicenseNo: {
    type: String,
    required: true
  },
  tradeLicenseDate: {
    type: Date,
    required: true
  },
  tradeLicenseDoc: {
    type: String,
    required: true
  },
  businesCategory: {
    type: String,
    required: true
  },
  shopName: {
    type: String,
    required: true
  },
  contactPersonName: String,
  contactPersonMobile: String,
  city: {
    type: String,
    required: true
  },
  POBox: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('provider', providerSchema);