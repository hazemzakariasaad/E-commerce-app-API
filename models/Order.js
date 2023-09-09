const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const orderSchema = new mongoose.Schema({
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
    amount:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        default:"pending",
    }
});

const Order = mongoose.model('Order',orderSchema) ;

module.exports = Order;