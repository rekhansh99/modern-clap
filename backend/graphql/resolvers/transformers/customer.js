const Customer = require('../../../models/customer');
const { requests } = require('./request');
const { reviews } = require('./review');

exports.transformCustomer = customer => {
  return {
    ...customer._doc,
    _id: customer.id,
    pendingRequests: () => requests(customer.pendingRequests),
    completedRequests: () => requests(customer.completedRequests),
    cancelledRequests: () => requests(customer.cancelledRequests),
    reviews: () => reviews(customer.reviews)
  };
};

exports.customer = async customerId => {
  const customer = await Customer.findById(customerId);
  return this.transformCustomer(customer);
};

exports.customers = async customerIds => {
  const customers = await Customer.find({ _id: { $in: customerIds } });
  return customers.map(customer => {
    return this.transformCustomer(customer);
  });
};
