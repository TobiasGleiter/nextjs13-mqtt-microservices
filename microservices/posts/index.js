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
const posts = {};

// ----------------------------------------------------------------
// handle http requests from client
// post request from client
app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  try {
    // create new post and hold it in the posts object
    posts[id] = {
      id,
      title,
    };
    console.log("http post/posts request received", posts[id]);

    // mqtt publish new post
    client.publish("posts/create", JSON.stringify(posts[id]));
    console.log("http 'posts/create' request published");

    // return the newly created post
    res.status(201).send(posts[id]);
  } catch (err) {
    // remove the post from the posts object
    delete posts[id];
    console.log(err);

    res.status(500).send(err);
  }
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
