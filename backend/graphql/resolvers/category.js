const Category = require("../../models/category");

const { transformCategory } = require('./transformers/category');

module.exports = {
  categories: async () => {
    try {
      const categories = await Category.find();
      return categories.map((category) => transformCategory(category));
    } catch (err) {
      throw err;
    }
  },

  category: async ({ name }) => {
    try {
      const category = await Category.findOne({ name });
      return category._doc;
    } catch (err) {
      throw err;
    }
  },

  createCategory: async ({ category }, req) => {
    const existingCategory = await Category.findOne({ name: category.name });

    if (existingCategory)
      throw new Error('Category name taken!');

    const newCategory = new Category({
      name: category.name,
      services: []
    });

    const result = await newCategory.save();
    return transformCategory(result);
  }
};
