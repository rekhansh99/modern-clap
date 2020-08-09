const ObjectId = require('mongoose').Types.ObjectId;

const Request = require('../../models/request');
const Business = require('../../models/business');
const Customer = require('../../models/customer');
const { transformRequest, request } = require('./transformers');

module.exports = {
  requests: async (args, ctx) => {
    if (!ctx.req.isAuth) throw new Error('Unauthorized');

    const match = {};
    switch (ctx.req.role) {
      case 'customer':
        match['customer'] = ObjectId(ctx.req.uid);
        break;

      case 'provider':
        if (!args.business) throw new Error('Pass business to the query');
        if (
          !(await Business.exists({
            _id: args.business,
            provider: ctx.req.uid
          }))
        )
          throw new Error('Business not found or does not belongs to you!');
        match['business'] = ObjectId(args.business);
        if (args.customer) match['customer'] = ObjectId(args.customer);
        break;

      case 'admin':
        if (args.business) match['business'] = ObjectId(args.business);
        if (args.customer) match['customer'] = ObjectId(args.customer);
        break;

      default:
        throw new Error('Something went wrong!');
    }
    if (args.startDate && args.endDate) {
      match['createdAt'] = {
        $gte: new Date(args.startDate),
        $lt: new Date(args.endDate)
      };
    }
    if (args.payment) {
      match['request'] = {
        payment: {
          mode: args.payment
        }
      };
    }

    let requestList = (
      await Request.aggregate()
        .match(match)
        .sort({ createdAt: 'desc' })
        .facet({
          requests: [
            { $skip: (args.page - 1) * args.limit },
            { $limit: args.limit }
          ],
          count: [{ $count: 'count' }]
        })
    )[0];

    return {
      requests: requestList.requests.map(request => transformRequest(request)),
      pagination: {
        page: args.page,
        limit: args.limit,
        total: requestList.count[0] ? requestList.count[0].count : 0
      }
    };
  },

  request: async (args, ctx) => {
    if (!ctx.req.isAuth) throw new Error('Unauthenticated');

    const requestData = await request(args.id);

    if (requestData[ctx.req.role].toString() !== ctx.req.uid)
      throw new Error('Unauthorized');

    return requestData;
  },

  bookRequest: async (args, ctx) => {
    if (!ctx.req.isAuth || ctx.req.role !== 'customer')
      throw new Error('Unauthorized');

    const newRequest = new Request({
      serivces: args.request.services.map(service => ({
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
        subtotal: args.request.subtotal,
        vat: args.request.vat,
        discount: args.request.discount,
        total: args.request.total,
        status: 'pending'
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
