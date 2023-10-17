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
// MQTT
client.on("connect", () => {
  // subscribe to the /posts topic
  client.subscribe("posts/create");
  client.subscribe("comments/create");
  client.subscribe("moderation/moderated");
});

client.on("message", (topic, message) => {
  if (topic === "posts/create") {
    // handele the post request
  }

  if (topic === "comments/create") {
    // handele the comment request
    console.log(JSON.parse(message.toString()));
    const data = JSON.parse(message.toString());
    console.log("CommentCreated received, status set to = ", data.status);

    const status = data.content.includes("bla bla") ? "rejected" : "approved";
    console.log(status);

    const res = {
      id: data.id,
      postId: data.postId,
      status,
      content: data.content,
    };

    console.log(res);
    client.publish("moderation/moderated", JSON.stringify(res));
  }
});

app.listen(4003, () => {
  console.log("Listening on 4003");
});
