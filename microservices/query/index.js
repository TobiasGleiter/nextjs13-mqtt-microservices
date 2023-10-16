const express = require('express');
const app = express();

const cors = require('cors'); 
app.use(cors());
app.use(express.json());

const posts = {};

app.get('/posts',(req,res)=> {
    console.log(posts);
    res.send(posts);
});

app.listen(4002, async() => {
    console.log('Listening on 4002');
});