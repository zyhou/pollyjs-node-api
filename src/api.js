const axios = require("axios");

const baseURL = "https://jsonplaceholder.typicode.com";

const apiClient = axios.create({
  baseURL,
  timeout: 5000
});

module.exports = {
  apiClient
};
