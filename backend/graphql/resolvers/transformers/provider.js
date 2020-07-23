const Provider = require("../../../models/provider");

const { category } = require("./category");

exports.transformProvider = (provider) => {
  return {
    ...provider._doc,
    _id: provider.id,
    password: null,
    businessCategory: () => category(provider._doc.businessCategory),
  };
};

exports.provider = async (providerId) => {
  try {
    const provider = await Provider.findById(providerId);
    return this.transformProvider(provider);
  } catch (err) {
    throw err;
  }
};

exports.providers = async (providerIds) => {
  try {
    const providers = await Provider.find({ _id: { $in: providerIds } });
    return providers.map((provider) => {
      return this.transformProvider(provider);
    });
  } catch (err) {
    throw err;
  }
};
