const Service = require("../../../models/service");

const { category } = require("./category");
const { provider } = require("./provider");

exports.transformService = (service) => {
  return {
    ...service._doc,
    _id: service.id,
    category: category.bind(this, service._doc.category),
    provider: provider.bind(this, service._doc.provider)
  };
};

exports.service = async (serviceId) => {
  try {
    const service = await Service.findById(serviceId);
    return this.transformService(service);
  } catch (err) {
    throw err;
  }
};

exports.services = async (serviceIds) => {
  try {
    const services = await Service.find({ _id: { $in: serviceIds } });
    return services.map((service) => {
      return this.transformService(service);
    });
  } catch (err) {
    throw err;
  }
};
