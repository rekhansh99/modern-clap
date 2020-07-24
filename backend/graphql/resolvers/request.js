const Request = require('../../models/request');
const Customer = require('../../models/customer');
const { transformRequest, request } = require('./transformers/request');

module.exports = {
  requests: async (args, ctx) => {
    let requests;
    if (!ctx.req.isAuth) throw new Error('Unauthorized');

    switch (ctx.req.role) {
      case 'provider':
      case 'customer':
        requests = await Request.find({ [ctx.req.role]: ctx.req.uid })
          .sort({ createdAt: 'desc' })
          .skip((args.page - 1) * args.limit)
          .limit(args.limit);
        break;

      case 'admin':
        if (args.customer) {
          requests = await Request.find({ customer: args.customer })
            .sort({ createdAt: 'desc' })
            .skip((args.page - 1) * args.limit)
            .limit(args.limit);
        } else if (args.provider) {
          requests = await Request.find({ provider: args.provider })
            .sort({ createdAt: 'desc' })
            .skip((args.page - 1) * args.limit)
            .limit(args.limit);
        }
    }

    return requests.map(request => transformRequest(request));
  },

  request: async (args, ctx) => {
    if (!ctx.req.isAuth) throw new Error('Unauthorized');

    const requestData = await request(args.id);

    if (requestData[ctx.req.role].toString() !== ctx.req.uid)
      throw new Error('Unauthorized');

    return requestData;
  },

  bookRequest: async (args, ctx) => {
    if (!ctx.req.isAuth || ctx.req.role !== 'customer')
      throw new Error('Unauthorized');

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
    await Request.findByIdAndUpdate(args.id, {
      status: 'cancelled'
    });

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
