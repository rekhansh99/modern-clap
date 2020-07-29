const Type = require('../../models/type');
const { transformType } = require('./transformers');

module.exports = {
  types: () => {
    // TODO
  },

  type: () => {
    // TODO
  },

  createType: async args => {
    const existingType = await Type.findOne({ name: args.type.name });
    console.log(existingType);
    if (existingType) throw new Error('Type name already taken!');

    const newType = new Type({
      ...args.type,
      categories: []
    });
    const type = await newType.save();
    return transformType(type);
  }
};
