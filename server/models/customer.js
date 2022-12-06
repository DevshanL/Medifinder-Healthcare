const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({

    firstName:{
        type:String,
        required:true
    },

    lastName:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    phoneNum:{
        type:Number,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    confPassword:{
        type:String,
        required:true
    },

});

module.exports = mongoose.model('customerdb',customerSchema)