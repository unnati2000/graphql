const { products } = require("../db");

exports.Category = {
  products: (parent, args, context) => {
    const { products } = context;
    const categoryId = parent;
    return products.filter((product) => product.categoryId === categoryId);
  },
};
