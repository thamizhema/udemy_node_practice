const firendsModel = require("../models/friend.model");

function getAllFriends(req, res) {
  res.status(200).json(firendsModel);
}

module.exports = {
  getAllFriends,
};
