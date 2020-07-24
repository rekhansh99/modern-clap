const Request = require('../../models/request');
const Customer = require('../../models/customer');
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

  bookRequest: async (args, ctx) => {
    const newRequest = new Request({
      serivces: args.request.serivces.map(service => ({
        service: service,
        staffAssigned: []
      })),
      time: args.request.time,
      location: {
        flatNo: args.request.flatNo,
        area: args.request.area,
        landmark: args.request.landmark,
        addressType: args.request.addressType
      },
      payment: {
        mode: args.request.mode,
        subTotal: args.request.subTotal,
        vat: args.request.vat,
        discount: args.request.discount,
        total: args.request.total
      },
      status: 'pending',
      customer: ctx.req.uid
    });
    const request = await newRequest.save();

    await Customer.findByIdAndUpdate(ctx.req.uid, {
      $push: {
        pendingRequests: request.id
      }
    });

    return transformRequest(request);
  },

  cancelRequest: async (args, ctx) => {
    await Request.findByIdAndDelete(args.id);

    await Customer.findByIdAndUpdate(ctx.req.uid, {
      $pull: {
        pendingRequests: args.id
      },
      $push: {
        cancelledRequests: args.id
      }
    });

    return 'Request deleted successfully!';
  },

  updateRequest: () => {
    // TODO
  }
};
