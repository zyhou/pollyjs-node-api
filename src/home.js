const { apiClient } = require("./api");

const home = async () => {
  const [posts, photos] = await Promise.all([
    apiClient("/posts?_start=0&_limit=5"),
    apiClient("/photos?_start=0&_limit=5")
  ]);

  return { posts: posts.data, photos: photos.data };
};

module.exports = {
  home
};
