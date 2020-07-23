const Provider = require('../../models/provider');

module.exports = {
  providers: (args, req) => {
    // TODO
  },

  provider: (args, req) => {
    // TODO
  },

  registerProvider: (args, req) => {
    // TODO
    console.log(provider);
    const provider = new Provider({
      ...args
    })
  },

  loginProvider: (args, req) => {

  },

  updateProvider: (args, req) => {
    // TODO
  }
}