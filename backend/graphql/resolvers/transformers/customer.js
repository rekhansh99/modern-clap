const Customer = require("../../../models/customer");
const { requests } = require("./request");
const { reviews } = require("./review");


exports.transformCustomer = (customer) => {
  return {
    ...customer._doc,
    _id: customer.id,
    pendingRequests: () => requests(customer.pendingRequests),
    completedRequests: () => requests(customer.completedRequests),
    cancelledRequests: () => requests(customer.cancelledRequests),
    reviews: () => reviews(customer.reviews),
  };
};

exports.customer = async (customerId) => {
  try {
    const customer = await Customer.findById(customerId);
    return this.transformCustomer(customer);
  } catch (err) {
    throw err;
  }
};

exports.customers = async (customerIds) => {
  try {
    const customers = await Customer.find({ _id: { $in: customerIds } });
    return customers.map((customer) => {
      return this.transformCustomer(customer);
    });
  } catch (err) {
    throw err;
  }
};
