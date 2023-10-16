const express = require("express");
const app = express();

const { randomBytes } = require("crypto");
const posts = {};

const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/posts", (req, res) => {
  console.log("http get request received");
  res.send(posts);
});

app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };
  console.log("http post/posts request received", posts[id]);

  // mqtt publish new posts

  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
