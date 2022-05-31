const express = require("express");
const mongoose = require('mongoose');
const bodyParser=require('body-parser');

const users = require("./routes/Users")
const album = require("./routes/Album")
const photos = require("./routes/Posts")


var cors = require('cors');

const app = express();      
app.use(cors())    
app.use(bodyParser.json());    
app.use(bodyParser.urlencoded({ extended: true })); 

app.use("api/user", users)
app.use("api/album", album)
app.use("api/photo", photos)

mongoose.connect("mongodb+srv://vaman55:vaman12345@cluster0.bdkh0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
        .then(()=>app.listen(5000))
        .then(()=>
        console.log("connected to mongodb on port 5000"))
        .catch((err)=>console.log(err))