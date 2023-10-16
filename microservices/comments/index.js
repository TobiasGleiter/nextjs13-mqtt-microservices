// change history
// hs002 implement the event bus communication
//   when a new comment is generated the comment info will be sent via http req. to the eventbus service
//   listening on port 4005

// hs003 put additional bus. logic in to handle diffent status on comments


const express = require('express');
const app = express();
const { randomBytes } = require('crypto');
const cors = require('cors'); 
app.use(cors());

// required to handle the request body
app.use(express.json());

// we want to store the comments in memory 
// and the structure for comments should look like
//    qwer -> {{id:'yxz',content: 'great post'}, {id:'123':content:'great comment'}}
//    asdf -> {{id:'zzz',content: 'next post'}, {id:'456':content:'next great comment'}}
//      qwer and asdf are the ids of the post and yxz,zzz ... are the ids of comments

const commentsByPostId ={};
// route handler for get request
app.get('/posts/:id/comments', (req, res) =>{
    console.log("http get request received");
    res.send(commentsByPostId[req.params.id] || []);
});

// route handler for post request
app.post('/posts/:id/comments', async(req, res) => {
    // create a new commentID
    const commentId = randomBytes(4).toString('hex');
    // get the request body and put it into content
    const {content} = req.body;
    const comments = commentsByPostId[req.params.id] || [];
    //push the content into the array based on id
    // hs003 add status pending
    comments.push ({id:commentId, content, status: "pending"});
    commentsByPostId[req.params.id] = comments;
    console.log("http post/posts request received", commentsByPostId[req.params.id]);

    
    res.status(201).send(comments);
});


app.listen(4001, () =>{
    console.log('Listening on 4001');
})