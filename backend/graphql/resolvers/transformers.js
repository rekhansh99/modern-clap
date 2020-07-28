/* eslint-disable no-unused-vars */

const Category = require('../../models/category');
const Customer = require('../../models/customer');
const Provider = require('../../models/provider');
const Request = require('../../models/request');
const Review = require('../../models/review');
const Service = require('../../models/service');
const Staff = require('../../models/staff');
const Type = require('../../models/type');

exports.transformCategory = category => {
  return {
    ...category._doc,
    __typename: 'Category',
    _id: category.id,
    typeId: category.type.toString(),
    type: () => this.type(category.type),
    serviceIds: category.services.map(id => id.toString()),
    services: () => this.services(category._doc.services)
  };
};

exports.transformCustomer = customer => {
  return {
    __typename: 'Customer',
    _id: customer.id,
    name: customer.name,
    pendingRequestIds: customer.pendingRequests.map(id => id.toString()),
    completedRequestIds: customer.completedRequests.map(id => id.toString()),
    cancelledRequestIds: customer.cancelledRequests.map(id => id.toString()),
    reviewIds: customer.reviews.map(id => id.toString()),
    pendingRequests: () => this.requests(customer.pendingRequests),
    completedRequests: () => this.requests(customer.completedRequests),
    cancelledRequests: () => this.requests(customer.cancelledRequests),
    reviews: () => this.reviews(customer.reviews),
    createdAt: customer.createdAt.toISOString(),
    updatedAt: customer.updatedAt.toISOString()
  };
};

exports.transformProvider = provider => {
  return {
    ...provider._doc,
    __typename: 'Provider',
    _id: provider.id,
    password: null,
    businessCategoryId: provider.businessCategory.toString(),
    businessCategory: () => this.category(provider._doc.businessCategory),
    createdAt: provider.createdAt.toISOString(),
    updatedAt: provider.updatedAt.toISOString()
  };
};

exports.transformRequest = async request => {
  return {
    ...(request._doc || request),
    __typename: 'Request',
    _id: request.id || request._id.toString(),
    time: request.time.toISOString(),
    serviceIds: request.services.map(s => ({
      service: s.service.toString(),
      staffsAssigned: s.staffsAssigned.map(id => id.toString())
    })),
    reviewId: request.review && request.review.toString(),
    customerId: request.customer && request.customer.toString(),
    providerId: request.provider && request.provider.toString(),
    services: () =>
      request.services.map(s => ({
        service: () => this.service(s.service),
        staffsAssigned: () => this.staffs(s.staffsAssigned)
      })),
    review: () => this.review(request.review),
    customer: async () => ({
      name: (await this.customer(request.customer)).name
    }),
    provider: async () => ({
      shopName: (await this.provider(request.provider)).shopName
    }),
    createdAt: request.createdAt.toISOString(),
    updatedAt: request.updatedAt.toISOString()
  };
};

exports.transformReview = review => {
  return {
    ...review._doc,
    __typename: 'Review',
    _id: review.id,
    requestId: review.request && review.request.toString(),
    request: () => this.request(review.request),
    createdAt: review.createdAt.toISOString(),
    updatedAt: review.updatedAt.toISOString()
  };
};

exports.transformService = service => {
  return {
    ...service._doc,
    __typename: 'Service',
    _id: service.id,
    categoryId: service.category && service.category.toString(),
    providerId: service.provider && service.provider.toString(),
    category: () => this.category(service._doc.category),
    provider: () => this.provider(service._doc.provider)
  };
};

exports.transformStaff = staff => {
  return {
    ...staff._doc,
    __typename: 'Staff',
    _id: staff.id,
    reviewIds: staff.reviews.map(id => id.toString()),
    reviews: () => this.reviews(staff.reviews),
    createdAt: staff.createdAt.toISOString(),
    updatedAt: staff.updatedAt.toISOString()
  };
};

exports.transformType = type => {
  return {
    ...type._doc,
    __typename: 'Type',
    _id: type.id,
    categoryIds: type.categories.map(id => id.toString()),
    categories: () => this.categories(type.categories)
  };
};

exports.category = async categoryId => {
  const category = await Category.findById(categoryId);
  return this.transformCategory(category);
};

exports.categories = async categoryIds => {
  const categories = await Category.find({ _id: { $in: categoryIds } });
  return categories.map(this.transformCategory);
};

exports.customer = async customerId => {
  const customer = await Customer.findById(customerId);
  return this.transformCustomer(customer);
};

exports.customers = async customerIds => {
  const customers = await Customer.find({ _id: { $in: customerIds } });
  return customers.map(this.transformCustomer);
};

exports.provider = async providerId => {
  const provider = await Provider.findById(providerId);
  return this.transformProvider(provider);
};

exports.providers = async providerIds => {
  const providers = await Provider.find({ _id: { $in: providerIds } });
  return providers.map(this.transformProvider);
};

exports.request = async requestId => {
  const request = await Request.findById(requestId);
  return this.transformRequest(request);
};

exports.requests = async requestIds => {
  const requests = await Request.find({ _id: { $in: requestIds } });
  return requests.map(this.transformReview);
};

exports.review = async reviewId => {
  const review = await Review.findById(reviewId);
  return this.transformReview(review);
};

exports.reviews = async reviewIds => {
  const reviews = await Review.find({ _id: { $in: reviewIds } });
  return reviews.map(this.transformReview);
};

exports.service = async serviceId => {
  const service = await Service.findById(serviceId);
  return this.transformService(service);
};

exports.services = async serviceIds => {
  const services = await Service.find({ _id: { $in: serviceIds } });
  return services.map(this.transformService);
};

exports.staff = async staffId => {
  const staff = await Staff.findById(staffId);
  return this.transformStaff(staff);
};

exports.staffs = async staffIds => {
  const staffs = await Staff.find({ _id: { $in: staffIds } });
  return staffs.map(this.transformStaff);
};

exports.type = async typeId => {
  const type = await Type.findById(typeId);
  return this.transformType(type);
};

exports.types = async typeIds => {
  const types = await Type.find({ _id: { $in: typeIds } });
  return types.map(this.transformType);
};
