const Products = require("./products.mongo");

const getAllProducts = async () => {
  return await Products
    .find({}, { __v: 0, _id: 0 })
    .sort({ _id: 1 })
};

module.exports = { getAllProducts };
