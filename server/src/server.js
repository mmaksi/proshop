const http = require("http");
require('dotenv').config();
const colors = require("colors")
const app = require("./app");
const { mongoConnect } = require("./services/mongo");
// const { loadLaunchData } = require("./models/launches/launches.model");
// const { loadPlanetsData } = require("./models/planets/planets.model");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

const startServer = async () => {
  await mongoConnect();
  // await loadPlanetsData();
  // await loadLaunchData();

  server.listen(PORT, () => {
    console.log(`App running in ${process.env.NODE_ENV} mode on port ${PORT}`.magenta.bold);
  });
};

startServer();