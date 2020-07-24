const Service = require('../../models/service');
const { service, transformService } = require('./transformers/service');

module.exports = {
  service: args => {
    return service(args.id);
  },

  createService: async args => {
    const newService = new Service({
      ...args.service
    });
    const service = newService.save();
    return transformService(service);
  }
};
