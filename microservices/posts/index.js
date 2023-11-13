// mqtt
const mqtt = require("mqtt");

const options = {
  clientid: "post",
  username: "test",
  password: "test",
};
const client = mqtt.connect("mqtt://mqtt-broker:1883", options); // local mqttbroker
// express
const express = require("express");
const app = express();
// crypto
const { randomBytes } = require("crypto");
// cors
const cors = require("cors");
app.use(cors());
app.use(express.json());
// mongodb
const mongoose = require("mongoose");
const { PostsModel } = require("./model/postDataModel.js");
const PostModel = require("./model/postDataModel.js").PostsModel;
const DB_URI =
  "mongodb://root:rootpassword@tg-mongodb:27017/posts?authSource=admin";

// ----------------------------------------------------------------
// Constants
const posts = {};

// ----------------------------------------------------------------
// Mongodb
mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to local MongoDB");
  });

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

    try {
      const postModel = new PostsModel({
        id: id,
        title: title,
      });
      console.log("saved into mongodb");
      await postModel.save();
    } catch (err) {
      console.error("Error saving into MongoDB", err);
      res.status(500).send("Error saving data");
    }

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
