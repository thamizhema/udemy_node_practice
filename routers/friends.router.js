const express = require("express");
const friendsRouter = express.Router();
const friendsContoller = require("../controller/firends.contoller");

friendsRouter.use((req, res, next) => {
  console.log("before firends middleware");
  next();
  console.log("after firends middleware");
});

friendsRouter.get("/", friendsContoller.getAllFriends);

module.exports = friendsRouter;
