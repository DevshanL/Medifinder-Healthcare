const mongoose = require('mongoose');

const phmSchema = new mongoose.Schema({

 

    name:{
        type:String,
        required:true
    },

    owner:{
        type:String,
        required:true
    },

    lati:{
        type:Number,
        required:true
    },
    lngi:{
        type:Number,
        required:true
    }

   

});

module.exports = mongoose.model('phmdb',phmSchema)