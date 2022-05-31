const express = require("express");
const router = express.Router();
const Post = require("../models/Photos");

const SECRET = "RESTAPI";


/////////////////////////////
router.get("/posts", async (req, res) =>{
    const posts = await Post.find();
    res.json({
        status: "Successfull", posts
    });
})


////////////////////////////
router.post("/posts", async (req, res) => {
    const post = await Post.create({
        albumId: req.body.albumId,
        userId: req.body.userId,
        name: req.name,
        img: req.body.img
       
    })
    res.json({
        status: "Successfull", post
    })
})

////////////////////////////
router.put("/posts/:id", async (req, res) => {
    const post = await Post.updateOne({_id: req.params.id, user: req.user}, {body: req.body.body});
    if(post.modifiedCount > 0){
        res.json({
            status: "Post was updated successfull",
        })
    }else {
        res.json({
            status: "Post was not able to update by the user"
        })
    }

})

//////////////////////////////
router.delete("/posts/:id", async (req, res) => {
    const post = await Post.deleteOne({_id: req.params.id, user: req.user});
    console.log(post);
    if(post.deletedCount > 0){
        res.json({
            status: "Post was deleted successfull",
        })
    }else {
        res.json({
            status: "Uer was not able to delete the post",
        })
    }
    
})

module.exports = router;