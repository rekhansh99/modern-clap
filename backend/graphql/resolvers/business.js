const Business = require('../../models/business');
const { business, transformBusiness } = require('./transformers');

module.exports = {
  business: args => {
    return business(args.id);
  },

  businesses: async () => {
    const businesses = await Business.find();
    return businesses.map(transformBusiness);
  },

  createBusiness: async args => {
    const newBusiness = new Business({
      ...args.business
    });
    const business = await newBusiness.save();
    return transformBusiness(business);
  }
};
