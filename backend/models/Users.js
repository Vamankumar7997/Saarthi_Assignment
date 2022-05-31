const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: 
    {
        type: String, 
        required: true
    },
    lastName: 
    {
        type: String, 
        unique: true, 
        required: true
    },
    phoneNo: 
    {
        type:Number
    }
}, {timestamps: true});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;