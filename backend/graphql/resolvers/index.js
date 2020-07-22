const Category = require("../../models/category");

module.exports = {
  categories: async () => {
    try {
      const categories = await Category.find();
      return categories;
    } catch (err) {
      throw err;
    }
  },

  createCategory: async (args) => {
    const category = new Category({ name: args.category.name });
    const result = await category.save();

    return result._doc;
  }
};
