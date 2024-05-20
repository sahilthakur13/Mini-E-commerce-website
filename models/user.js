const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullName:{
        type:String,
        require: true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    role:{
        type: String,
        required:true,
        default: "NORMAL",
    },   
},
{timestramps: true})

const User = mongoose.model('user',userSchema)
module.exports = User;