const { apiClient } = require("./api");

const getHome = async () => {
  const [posts, photos] = await Promise.all([
    apiClient.get("/posts?_start=0&_limit=5"),
    apiClient.get("/photos?_start=0&_limit=5")
  ]);

  return { posts: posts.data, photos: photos.data };
};

module.exports = {
  getHome
};
