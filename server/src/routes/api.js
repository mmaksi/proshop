const express = require("express");
const productsRouter = require("./products/products.routes");
// const { planetsRouter } = require("./planets/planets.router");

const api = express.Router();

api.use("/products", productsRouter);
// api.use("/launches", launchesRouter);

module.exports = api;