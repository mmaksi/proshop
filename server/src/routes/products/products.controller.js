const asyncHandler = require('express-async-handler')
const { getAllProducts, getProduct } = require("../../models/products/products.model");
const ObjectId = require('mongoose').Types.ObjectId;

const httpGetAllProducts = asyncHandler(async (req, res) => {
  // throw new Error(`Unauthorized`)
  const products = await getAllProducts();
  return res.status(200).json(products);
});

const httpGetProduct = asyncHandler(async ({params}, res) => {
  if (!ObjectId.isValid(params.id)) return res.status(500).json({ message: "Invalid ID" })

  const product = await getProduct(params.id)
  if (product) return res.status(200).json(product);
  return res.status(404).json({ message: "Product not found"});
});

module.exports = {
  httpGetAllProducts,
  httpGetProduct,
};
