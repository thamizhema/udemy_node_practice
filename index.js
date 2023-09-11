const express = require("express");

// routers

const messageRouter = require("./routers/message.router");
const friendsRouter = require("./routers/friends.router");

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  console.log("before app middleware");
  next();
  console.log("after app middlewate");
});

app.get("/", (req, res) => {
  res.send("welcome to node practice");
});

app.use("/message/", messageRouter);
app.use("/friend/", friendsRouter);

app.listen(3000, () => {
  console.log(`server running at http://localhost:3000`);
});
