const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    address: {
       type: String,
       required: true 
    }
    // subscribeDate: {
    //     type: Date,
    //     required: true,
    //     default: Date.now
    // }

})

module.exports = mongoose.model('userModel', userschema)