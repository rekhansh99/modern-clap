const Service = require('../../../models/service');

const { category } = require('./category');
const { provider } = require('./provider');

exports.transformService = service => {
  return {
    ...service._doc,
    _id: service.id,
    category: () => category(service._doc.category),
    provider: () => provider(service._doc.provider)
  };
};

exports.service = async serviceId => {
  const service = await Service.findById(serviceId);
  return this.transformService(service);
};

exports.services = async serviceIds => {
  const services = await Service.find({ _id: { $in: serviceIds } });
  return services.map(service => {
    return this.transformService(service);
  });
};
