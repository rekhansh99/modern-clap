const Category = require('../../models/category');

const { transformCategory } = require('./transformers');

module.exports = {
  categories: async () => {
    const categories = await Category.find();
    return categories.map(category => transformCategory(category));
  },

  category: async ({ name }) => {
    const category = await Category.findOne({ name });
    return category._doc;
  },

  createCategory: async ({ category }) => {
    const existingCategory = await Category.findOne({ name: category.name });

    if (existingCategory) throw new Error('Category name taken!');

    const newCategory = new Category({
      name: category.name,
      services: []
    });

    const result = await newCategory.save();
    return transformCategory(result);
  }
};
