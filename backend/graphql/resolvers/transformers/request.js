const Request = require("../../../models/request");
const { service } = require("./service");
const { staffs } = require("./service");
const { review } = require("./service");
const { customer } = require("./service");
const { provider } = require("./service");

exports.transformRequest = (request) => {
  return {
    ...request._doc,
    _id: request.id,
    services: () =>
      request.services.map((s) => ({
        service: () => service(s.service),
        staffsAssigned: () => staffs(s.staffsAssigned),
      })),
    review: () => review(request.review),
    customer: () => customer(request.customer),
    provider: () => provider(request.provider),
  };
};

exports.request = async (requestId) => {
  try {
    const request = await Request.findById(requestId);
    return this.transformRequest(request);
  } catch (err) {
    throw err;
  }
};

exports.requests = async (requestIds) => {
  try {
    const requests = await Request.find({ _id: { $in: requestIds } });
    return requests.map((request) => {
      return this.transformRequest(request);
    });
  } catch (err) {
    throw err;
  }
};
