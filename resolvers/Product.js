const { categories, reviews } = require("../db");

exports.Product = {
  category: (parent, args, context) => {
    const { categories } = context;
    const categoryId = parent.categoryId;
    return categories.find((category) => category.id === categoryId);
  },

  review: (parent, args, context) => {
    return context.reviews.filter((review) => review.productId === parent.id);
  },
};
