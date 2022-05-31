const express = require("express");
const router = express.Router();
const Album = require("../models/Album");

const SECRET = "RESTAPI";

/// //////////////////
router.get("/album", async (req, res) => {
    const albums = await Album.find();
    res.json({
        status: "Successfull", albums
    });
});

router.get("/album/:id", async (req, res) => {
    await Album.findById(req.user, function(err, user) {
        res.send(user);
    });
});

/////////////////////////

router.post("/albums", async (req, res) => {
    const album = await Album.create({
        userId: req.body.userId,
        name: req.name
    })
    res.json({
        status: "Successfull", album
    })
})


//////////////////////////

router.put("/album/:id", async (req, res) => {
    const album = await Album.updateOne({_id: req.params.id, user: req.user}, {body: req.body.body});
    if(album.modifiedCount > 0){
        res.json({
            status: "Album has updated successful",
        })
    }else {
        res.json({
            status: "Unable to update the album"
        })
    }

})


module.exports = router
