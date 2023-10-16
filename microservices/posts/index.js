// change history
// hs002 implement the event bus communication
//   when a new post is generated the post info will be sent via http req. to the eventbus service
//   listening on port 4005

const express = require('express');
const app = express();

//const bodyParser = require('body-parser');
const {randomBytes} = require('crypto');
const posts = {};

const cors = require('cors'); 
app.use(cors());
// required to handle the request body
app.use(express.json());

const axios = require('axios');
app.get('/posts', (req,res)=>{
  // 001hs - when a get request is received send all data / post back to client
  console.log("http get request received");
  res.send(posts);
});

// hs002  new for event bus implementation (async)
app.post('/posts',  async(req, res) =>{
    // 001hs generate a unique id for each new post request
    const id = randomBytes(4).toString('hex');
    // 001hs data from request body into title
    const { title } = req.body;
    // 001hs put the data into the data array with id as key
    posts[id] = {
        id, title 
    };
    console.log("http post/posts request received", posts[id]);
    
    // hs002 new for event bus implementation
    await axios.post('http://localhost:4005/events', {
        type: 'PostCreated',
        data: { 
            id,
            title
        } 
    });

    // 001 return status 201 to client and the data itself
    res.status(201).send(posts[id]);
});

// hs002 new for event bus implementation
app.post('/events', (req, res) => {
    console.log("http post/events request received", req.body.type);
    res.send({});
});

app.listen(4000, () =>{
    console.log('Listening on port 4000')
})