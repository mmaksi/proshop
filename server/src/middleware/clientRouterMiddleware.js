const reactRouterHandler = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "index.html"));
};

module.exports = reactRouterHandler;
