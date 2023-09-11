const express = require("express");
const messageRouter = express.Router();
const messageController = require("../controller/message.controller");

messageRouter.post("/", messageController.sendMessage);

module.exports = messageRouter;
