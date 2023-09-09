const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'user must have a name ']
    },
    desc:{
        type:String,
        required:[true,'product must have a description ']
    },
    size:{
        type:String,
        required:[true,'product must have a size ']
    },
    color:{
        type:String,
        required:[true,'product must have a color ']
    },
    price:{ 
        type:Number,
        required:[true,'product must have a price ']
    },
    categories:{
        type:String,
        required:[true,'product must have a category ']
    },
});
const Product = mongoose.model('Product',productSchema)