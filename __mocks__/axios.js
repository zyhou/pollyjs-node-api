const get = jest.fn();

const axios = {
  get,
  create: () => axios
};

module.exports = axios;
