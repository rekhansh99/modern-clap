const Provider = require('../../../models/provider');

const { category } = require('./category');

exports.transformProvider = provider => {
  return {
    ...provider._doc,
    _id: provider.id,
    password: null,
    businessCategory: () => category(provider._doc.businessCategory)
  };
};

exports.provider = async providerId => {
  const provider = await Provider.findById(providerId);
  return this.transformProvider(provider);
};

exports.providers = async providerIds => {
  const providers = await Provider.find({ _id: { $in: providerIds } });
  return providers.map(provider => {
    return this.transformProvider(provider);
  });
};
