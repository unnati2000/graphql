exports.Query = {
  products: (parent, args, context) => {
    const { products } = context;
    return products;
  },
  product: (parent, args, context) => {
    const { products } = context;
    const productId = args.id;
    const product = products.find((product) => product.id === productId);
    if (!product) {
      return null;
    }

    return product;
  },
  categories: (parent, args, context) => {
    const { categories } = context;
    return categories;
  },
  category: (parent, args, context) => {
    const { categories } = context;
    const id = args.id;
    const category = categories.find((category) => category.id === id);
    if (!category) {
      return null;
    }
    return category;
  },
};
