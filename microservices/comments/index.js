// mqtt
const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://broker.hivemq.com");
// express
const express = require("express");
const app = express();
// crypto
const { randomBytes } = require("crypto");
// cors
const cors = require("cors");
app.use(cors());
app.use(express.json());

// ----------------------------------------------------------------
// Constants
const commentsByPostId = {};

// ----------------------------------------------------------------
// handle http requests from client
// get request from client
app.get("/posts/:id/comments", (req, res) => {
  console.log("http get request received");
  res.status(200).send(commentsByPostId[req.params.id] || []);
});

// post request from client
app.post("/posts/:id/comments", async (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;
  const comments = commentsByPostId[req.params.id] || [];

  try {
    // create new comment and hold it in the commentsByPostId object
    comments.push({ id: commentId, content, status: "pending" });
    commentsByPostId[req.params.id] = comments;
    console.log(
      "http post/posts request received",
      commentsByPostId[req.params.id]
    );

    const data = {
      id: commentId,
      content,
      postId: req.params.id,
      status: "pending",
    };
    // mqtt publish new post
    client.publish("comments/create", JSON.stringify(data));
    console.log("http 'comments/create' request published");

    // return the newly created comments
    res.status(201).send(comments);
  } catch (err) {
    // remove the post from the posts object
    delete commentsByPostId[req.params.id];
    console.log(err);

    res.status(500).send(err);
  }
});

app.listen(4001, () => {
  console.log("Listening on 4001");
});
