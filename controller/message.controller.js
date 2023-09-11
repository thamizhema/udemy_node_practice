const firendsModel = require("../models/friend.model");

function sendMessage(req, res) {
  res.status(200).send("Hi how are your?");
}

module.exports = {
  sendMessage,
};
