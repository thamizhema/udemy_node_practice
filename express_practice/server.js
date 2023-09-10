const express = require("express");
// * external data
const { friends } = require("./friends_data");

const app = express();
const PORT = 3000;

app.use(express.json());

// ! middelware
app.use(function (req, res, next) {
  console.log("before middleware");
  next();
  console.log("after middlwware");
});

// ! starting routes

app.get("/", (req, res) => {
  console.log(req.url);
  res.send("Welcome Node practice");
});

app.get("/friends", (req, res) => {
  console.log(req.url);
  res.json(friends);
});

app.get("/friends/:friendId", (req, res) => {
  console.log(req.url);
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
