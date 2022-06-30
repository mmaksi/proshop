const { getAllProducts } = require("../../models/products/products.model");

const httpGetAllProducts = async (req, res) => {
  const products = await getAllProducts();
  res.json(products);
};

const httpGetProduct = (req, res) => {
  const product = products.find(
    (product) => Number(product._id) === Number(req.params.id)
  );
  res.json(product);
};

module.exports = {
  httpGetAllProducts,
  httpGetProduct,
};
