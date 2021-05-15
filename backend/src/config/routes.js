const express = require("express");

module.exports = function (server) {
  // API Routes
  const router = express.Router();
  server.use("/api", router);

  // userData Routes
  const userInfoService = require("../api/userData/userInfoService");
  userInfoService.register(router, "/userDataEndpoint");
};
