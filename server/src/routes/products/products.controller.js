const { getAllProducts, getProduct } = require("../../models/products/products.model");

const httpGetAllProducts = async (req, res) => {
  const products = await getAllProducts();
  return res.status(200).json(products);
};

const httpGetProduct = async ({params}, res) => {
  const product = await getProduct(params.id)
  if (product) return res.status(200).json(product);
  return res.status(404).json({ message: "Product not found"});
};

module.exports = {
  httpGetAllProducts,
  httpGetProduct,
};
