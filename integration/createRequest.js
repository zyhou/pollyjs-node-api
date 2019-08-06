const express = require("express");
const request = require("supertest");

const createRequest = () => {
  const app = express();

  const { router } = require("../src/router");
  app.use("/", router);

  return request(app);
};

module.exports = { createRequest };
