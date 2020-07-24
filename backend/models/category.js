const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = {
  name: {
    type: String,
    required: true
  },
  services: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Service'
    }
  ]
};

module.exports = mongoose.model('Category', categorySchema);
