const { apiClient } = require("./api");

const home = async () => {
  const response = await apiClient("/fr/web/home");
  return response.data;
};

module.exports = {
  home
};
