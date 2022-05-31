const express = require("express");
const router= express.Router();

const User = require("../models/Users");
const bodyparser = require("body-parser");
const { body, param, validationResult } = require('express-validator');

router.use(bodyparser());
/////// GET- To fetch all the users
router.get("/", async (req, res) => {
    const users = await User.find();
    res.json({
        users
    });
})
////// Post Router

router.get("*", async (req, res) => {
    res.status(404).json({
        status: "Failed",
        message: "API NOT FOUND"
    });

    
})

///////get user by ID


router.get('/:id',  async (req, res) =>{
    await User.findById(req.user, function(err, user) {
     res.send(user);
  });
 });



//////// PUT route-- Add User
router.put("/:id", param("id").isMongoId(), async (req, res) => {
    try{
        await User.updateOne({_id: req.params.id}, req.body);
        return res.json({
             status: "Success",
            data : user
        });
    }catch(e){
        console.log(e);
        return res.status(500).json({
            status: "Failed",
            message: e.message
        });
    }
});

// PATCH route-- update user
router.patch("/:id", async (req, res) => {
    try{
        await User.updateOne({_id: req.params.id}, req.body);
        return res.json({
             status: "Success",
        });
    }catch(e){
        console.log(e);
        return res.status(500).json({
            status: "Failed",
            message: e.message
        });
    }
});


module.exports = router;     