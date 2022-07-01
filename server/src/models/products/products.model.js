const Products = require("./products.mongo");

const getAllProducts = async () => {
  return await Products.find({}, { __v: 0 }).sort({ _id: 1 });
};

const getProduct = async (productId) => {
  return await Products.find({ _id: productId }, { __v: 0 });
};

module.exports = { getAllProducts, getProduct };
