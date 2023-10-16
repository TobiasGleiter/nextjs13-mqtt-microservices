// mqtt
const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://broker.hivemq.com");
// express
const express = require("express");
const app = express();
// cors
const cors = require("cors");
app.use(cors());
app.use(express.json());

// ----------------------------------------------------------------
// Constants
const posts = {};

// ----------------------------------------------------------------
// MQTT
client.on("connect", () => {
  // subscribe to the /posts topic
  client.subscribe("/posts");
});

client.on("message", (topic, message) => {
  if (topic === "/posts") {
    // Parse the message into a JavaScript object
    const post = JSON.parse(message.toString());

    // Destructure the post object
    const { id, title } = post;

    // Add the post to the posts object
    posts[id] = { id, title, comments: [] };
  }
});

// ----------------------------------------------------------------
// handle http requests from client
// post request from client
app.get("/posts", (req, res) => {
  console.log(posts);
  res.status(200).send(posts);
});

app.listen(4002, async () => {
  console.log("Listening on 4002");
});
