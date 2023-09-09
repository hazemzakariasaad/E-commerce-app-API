const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const userschema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'user must have a name ']

    },
    email:{
        type:String,
        required:[true,'user must have a email '],
        unique:true,
        validate:{
           validate: validator.isEmail,
           message:'Must a provide a valid email'
        }
    },
    password:{
        type:String,
        required:[true,'user must have a password '],
        // select:false
        minlength:5,
    },
    confirmPassword:{
        type:String,
        required:[true,'user must have a password '],
        // select:false
        minlength:5,
        validate:{
            validator:function(el){ 
                return el===this.password
            },
            message:'passwords dont match'
        }
    },
    photo:{
        type: String,
    },
    role: {
        type: String,
        // required: [true, 'Must have a role'],
        enum: ['admin', 'user'],
        default:'user' 
      },  
})

const User = mongoose.model('User',userschema) ;

module.exports = User;