const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const cartSchema = new mongoose.Schema({
    userID:{
        type:String,
        required:true,
    },
    products:[
        {
            productID:{
                type:String,
            },
            quantity:{
                type:String,
            },
        },
    ],
});
const Cart = mongoose.model('Cart',cartSchema) ;

module.exports = Cart;