const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const businessSchema = new Schema(
  {
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
    type: {
      type: Schema.Types.ObjectId,
      ref: 'Type'
    },
    services: [
      {
        service: {
          type: Schema.Types.ObjectId,
          ref: 'Service',
          required: true
        },
        cutPrice: {
          type: Number,
          required: true
        },
        salePrice: {
          type: Number,
          required: true
        },
        active: {
          type: Boolean,
          required: true,
          default: false
        }
      }
    ],
    shopName: {
      type: String,
      required: true
    },
    contactPersonName: String,
    contactPersonMobile: String,
    contactPersonMobileVerified: {
      type: Boolean,
      default: false
    },
    businessHours: {
      open: {
        mon: {
          type: Number,
          min: 0,
          max: 23
        },
        tue: {
          type: Number,
          min: 0,
          max: 23
        },
        wed: {
          type: Number,
          min: 0,
          max: 23
        },
        thu: {
          type: Number,
          min: 0,
          max: 23
        },
        fri: {
          type: Number,
          min: 0,
          max: 23
        },
        sat: {
          type: Number,
          min: 0,
          max: 23
        },
        sun: {
          type: Number,
          min: 0,
          max: 23
        }
      },
      close: {
        mon: {
          type: Number,
          min: 0,
          max: 23
        },
        tue: {
          type: Number,
          min: 0,
          max: 23
        },
        wed: {
          type: Number,
          min: 0,
          max: 23
        },
        thu: {
          type: Number,
          min: 0,
          max: 23
        },
        fri: {
          type: Number,
          min: 0,
          max: 23
        },
        sat: {
          type: Number,
          min: 0,
          max: 23
        },
        sun: {
          type: Number,
          min: 0,
          max: 23
        }
      }
    },
    city: {
      type: String,
      required: true
    },
    pincode: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    requests: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Request'
      }
    ],
    provider: {
      type: Schema.Types.ObjectId,
      ref: 'Provider'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Business', businessSchema);
