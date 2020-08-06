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
  },

  updateBusiness: async (args, ctx) => {
    if (!ctx.req.isAuth) throw new Error('Not Authenticated');

    if (ctx.req.role !== 'provider') throw new Error('Not Authorized');

    const business = await Business.findById(args.id);

    if (!business) throw new Error('Business ID invalid');
    if (business.provider.toString() !== ctx.req.uid) throw new Error('Not Authorized');

    Object.keys(args.newData).map(key => {
      business[key] = args.newData[key];
    });
    await business.save();
    return transformBusiness(business);
  }
};
