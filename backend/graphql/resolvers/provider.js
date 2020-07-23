const Provider = require("../../models/provider");

const { transformProvider } = require("./transformers/provider");

module.exports = {
  providers: (args, req) => {
    // TODO
  },

  provider: (args, req) => {
    // TODO
  },

  registerProvider: async (args, req) => {
    const newProvider = new Provider({
      ...args.provider,
    });
    const provider = await newProvider.save();
    return transformProvider(provider);
  },

  loginProvider: (args, req) => {
    // TODO
  },

  updateProvider: (args, req) => {
    // TODO
  }
};
