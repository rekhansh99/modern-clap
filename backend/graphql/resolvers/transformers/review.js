const Review = require('../../../models/review');
const { request } = require('./request');

exports.transformReview = review => {
  return {
    ...review._doc,
    _id: review.id,
    request: () => request(review.request)
  };
};

exports.review = async reviewId => {
  const review = await Review.findById(reviewId);
  return this.transformReview(review);
};

exports.reviews = async reviewIds => {
  const reviews = await Review.find({ _id: { $in: reviewIds } });
  return reviews.map(review => {
    return this.transformReview(review);
  });
};
