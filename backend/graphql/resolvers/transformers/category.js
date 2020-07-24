const Category = require('../../../models/category');

const { services } = require('./service');

exports.transformCategory = category => {
  return {
    ...category._doc,
    _id: category.id,
    services: () => services(category._doc.services)
  };
};

exports.category = async categoryId => {
  const category = await Category.findById(categoryId);
  return this.transformCategory(category);
};

exports.categories = async categoryIds => {
  const categories = await Category.find({ _id: { $in: categoryIds } });
  return categories.map(category => {
    return this.transformCategory(category);
  });
};