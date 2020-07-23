const Request = require("../../models/request");
const { transformRequest, requests } = require("./transformers/request");


module.exports = {
  requests: (args, ctx) => {
    let requests = [];
    if (args.customer) {
      requests = await Request.findOne({ customer: args.customer });
    } else if (args.provider) {
      requests = await Request.findOne({ provider: args.provider });
    }
    return requests.map(request => transformRequest(request));
  },

  request: (args, req) => {
    return requests(args.id);
  },

  bookRequest: (args, req) => {
    // TODO
  },

  cancelRequest: (args, req) => {
    // TODO
  },

  updateRequest: (args, req) => {
    // TODO
  }
}