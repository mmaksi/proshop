const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const api = require("./routes/api");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const reactRouterHandler = require("./middleware/clientRouterMiddleware");

const app = express();
app.use(cors());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/v1", api);
app.use("/v1", notFound);
app.use(errorHandler);

// app.get("/*", reactRouterHandler);

module.exports = app;
