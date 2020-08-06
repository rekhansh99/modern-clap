const Request = require('../../models/request');
const Review = require('../../models/review');
const Customer = require('../../models/customer');
const { transformReview } = require('./transformers');

module.exports = {
  reviews: async args => {
    const match = {};

    if (args.business) {
      match['request'] = {
        business: args.business
      };
    }
    if (args.startDate && args.endDate) {
      match['createdAt'] = {
        $gte: new Date(args.startDate),
        $lt: new Date(args.endDate)
      };
    }
    if (args.rating) {
      match['overallRating'] = args.rating;
    }
    if (args.payment) {
      match['request'] = {
        ...match['request'],
        payment: {
          mode: args.payment
        }
      };
    }

    const reviewsList = (
      await Review.aggregate()
        .match(match)
        .sort({ createdAt: 'desc' })
        .facet({
          reviews: [
            { $skip: (args.page - 1) * args.limit },
            { $limit: args.limit }
          ],
          count: [{ $count: 'count' }]
        })
    )[0];

    return {
      reviews: reviewsList.reviews.map(transformReview),
      pagination: {
        page: args.page,
        limit: args.limit,
        total: reviewsList.count[0] ? reviewsList.count[0].count : 0
      }
    };
  },

  review: async args => {
    const requestId = args.requestId;
    const review = await Review.findOne({ request: requestId });
    return transformReview(review);
  },

  createReview: async (args, ctx) => {
    if (!ctx.req.isAuth) throw new Error('Unauthenticated!');
    if (ctx.req.role != 'customer') throw new Error('You are not a customer!');

    const request = await Request.findById(args.review.request);
    if (!request) throw new Error('Request not found!');

    if (request.customer == ctx.req.uid)
      throw new Error("You cannot review on other's requests");

    const existingReview = await Review.findOne({
      request: args.review.request
    });
    if (existingReview)
      throw new Error('Customer has already reviewed for this request!');

    const newReview = new Review({
      ...args.review
    });
    const review = await newReview.save();

    const customerId = ctx.req.uid; // we will inject uid in req while using the isAuth middleware
    await Customer.findByIdAndUpdate(customerId, {
      $push: {
        reviews: review.id
      }
    });

    return transformReview(review);
  }
};
