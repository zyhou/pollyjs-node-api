const { Router } = require("express");

const { getHome } = require("./home");

const router = new Router();

router.get("/", async (req, res) => {
  const home = await getHome();
  return res.json(home);
});

module.exports = {
  router
};
