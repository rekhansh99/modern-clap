/* eslint-disable no-unused-vars */

const Category = require('../../models/category');
const Customer = require('../../models/customer');
const Provider = require('../../models/provider');
const Request = require('../../models/request');
const Review = require('../../models/review');
const Service = require('../../models/service');
const Staff = require('../../models/staff');

exports.transformCategory = category => {
  return {
    ...category._doc,
    _id: category.id,
    services: () => services(category._doc.services)
  };
};

exports.transformCustomer = customer => {
  return {
    _id: customer.id,
    name: customer.name,
    pendingRequests: () => requests(customer.pendingRequests),
    completedRequests: () => requests(customer.completedRequests),
    cancelledRequests: () => requests(customer.cancelledRequests),
    reviews: () => reviews(customer.reviews)
  };
};

exports.transformProvider = provider => {
  return {
    ...provider._doc,
    _id: provider.id,
    password: null,
    businessCategory: () => category(provider._doc.businessCategory)
  };
};

exports.transformRequest = async request => {
  return {
    ...(request._doc || request),
    _id: request.id || request._id.toString(),
    time: request.time.toISOString(),
    services: () =>
      request.services.map(s => ({
        service: () => service(s.service),
        staffsAssigned: () => staffs(s.staffsAssigned)
      })),
    review: () => review(request.review),
    customer: async () => ({ name: (await customer(request.customer)).name }),
    provider: async () => ({
      shopName: (await provider(request.provider)).shopName
    })
  };
};

exports.transformReview = review => {
  return {
    ...review._doc,
    _id: review.id,
    request: () => request(review.request)
  };
};

exports.transformService = service => {
  return {
    ...service._doc,
    _id: service.id,
    category: () => category(service._doc.category),
    provider: () => provider(service._doc.provider)
  };
};

exports.transformStaff = staff => {
  return {
    ...staff._doc,
    _id: staff.id,
    reviews: () => reviews(staff.reviews)
  };
};

const category = async categoryId => {
  const category = await Category.findById(categoryId);
  return this.transformCategory(category);
};

const categories = async categoryIds => {
  const categories = await Category.find({ _id: { $in: categoryIds } });
  return categories.map(category => {
    return this.transformCategory(category);
  });
};

const customer = async customerId => {
  const customer = await Customer.findById(customerId);
  return this.transformCustomer(customer);
};

const customers = async customerIds => {
  const customers = await Customer.find({ _id: { $in: customerIds } });
  return customers.map(customer => {
    return this.transformCustomer(customer);
  });
};

const provider = async providerId => {
  const provider = await Provider.findById(providerId);
  return this.transformProvider(provider);
};

const providers = async providerIds => {
  const providers = await Provider.find({ _id: { $in: providerIds } });
  return providers.map(provider => {
    return this.transformProvider(provider);
  });
};

const request = async requestId => {
  const request = await Request.findById(requestId);
  return this.transformRequest(request);
};

const requests = async requestIds => {
  const requests = await Request.find({ _id: { $in: requestIds } });
  return requests.map(request => {
    return this.transformRequest(request);
  });
};

const review = async reviewId => {
  const review = await Review.findById(reviewId);
  return this.transformReview(review);
};

const reviews = async reviewIds => {
  const reviews = await Review.find({ _id: { $in: reviewIds } });
  return reviews.map(review => {
    return this.transformReview(review);
  });
};

const service = async serviceId => {
  const service = await Service.findById(serviceId);
  return this.transformService(service);
};

const services = async serviceIds => {
  const services = await Service.find({ _id: { $in: serviceIds } });
  return services.map(service => {
    return this.transformService(service);
  });
};

const staff = async staffId => {
  const staff = await Staff.findById(staffId);
  return this.transformStaff(staff);
};

const staffs = async staffIds => {
  const staffs = await Staff.find({ _id: { $in: staffIds } });
  return staffs.map(staff => {
    return this.transformStaff(staff);
  });
};
