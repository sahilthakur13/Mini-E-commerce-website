const mongoose = require('mongoose');
const cartSchema = mongoose.Schema({
    imageurl:{
        type:String,
        required:true,
    },
   name:{
    type: String,
    required: true,
   },
   price:{
    type: String,
    required:true,
   },
   desc:{
    type: String,
    required:true,
   },
   category:{
    type:String,
    required: true,
   },
},
{timestramps: true})

const products = mongoose.model('products',cartSchema)
module.exports = products;