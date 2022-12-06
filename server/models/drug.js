const mongoose = require('mongoose');

const drugSchema = new mongoose.Schema({

    // drugId:{
    //     type:String,
    //     required:true
    // },

    brand:{
        type:String,
        required:true
    },

    name:{
        type:String,
        required:true
    },

    qty:{
        type:Number,
        required:true
    },

    manDate:{
        type:String,
        required:true
    },

    expDate:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    details:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:true
    }

});

module.exports = mongoose.model('drugdb',drugSchema)