const express = require("express");
// * external data
const { friends } = require("./friends_data");

const app = express();
const PORT = 3000;

// ! starting routes

app.get("/", (req, res) => {
  res.send("Welcome Node practice");
});

app.get("/friends", (req, res) => {
  res.json(friends);
});

app.get("/friends/:friendId", (req, res) => {
  const firendId = Number(req.params.friendId);
  const friend = friends[firendId];
  console.log(firendId);
  console.log(friend);
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({ error: "Friend does not exist" });
  }
});

// ! ending routes

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});

module.exports = { app };
