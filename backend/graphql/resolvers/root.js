const categoryResolver = require('./category');
const customerResolver = require('./customer');
const providerResolver = require('./provider');
const requestResolver = require('./request');
const reviewResolver = require('./review');
const serviceResolver = require('./service');
const staffResolver = require('./staff');

module.exports = {
  ...categoryResolver,
  ...customerResolver,
  ...providerResolver,
  ...requestResolver,
  ...reviewResolver,
  ...serviceResolver,
  ...staffResolver
};
