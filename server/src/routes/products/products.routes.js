const express = require("express");

const { httpGetAllProducts, httpGetProduct } = require("./products.controller");

const productsRouter = express.Router();

productsRouter.get("/", httpGetAllProducts);
productsRouter.get("/:id", httpGetProduct)

module.exports = productsRouter;
