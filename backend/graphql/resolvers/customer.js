const Customer = require("../../models/customer");
const { transformCustomer } = require("./transformers/customer");

module.exports = {
  customers: async (args, req) => {
    const customers = await Customer.find();
    return customers.map((customer) => transformCustomer(customer));
  },

  customer: async (args, req) => {
    let customer = {};
    if (args.id) {
      customer = await Customer.findById(args.id);
    } else if (args.mobile) {
      customer = await Customer.findOne({ mobile: args.mobile });
    }
    return transformCustomer(customer);
  },

  sendOTP: (args, req) => {
    // TODO
  },

  loginCustomer: (args, req) => {
    // TODO
  },
};
