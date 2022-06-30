const products = require("../../../data/products");

const productsModel = require("./products.mongo");

const getAllLaunches = async (skip, limit) => {
  return await launchesModel
    .find({}, { __v: 0, _id: 0 })
    .sort({ flightNumber: 1 })
    .skip(skip)
    .limit(limit);
}




module.exports = products;
