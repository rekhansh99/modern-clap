const Request = require('../../models/request');
const { transformRequest, requests } = require('./transformers/request');

module.exports = {
  requests: async args => {
    let requests = [];
    if (args.customer) {
      requests = await Request.find({ customer: args.customer });
    } else if (args.provider) {
      requests = await Request.find({ provider: args.provider });
    }
    return requests.map(request => transformRequest(request));
  },

  request: args => {
    return requests(args.id);
  },

  bookRequest: () => {
    // TODO
  },

  cancelRequest: () => {
    // TODO
  },

  updateRequest: () => {
    // TODO
  }
};
