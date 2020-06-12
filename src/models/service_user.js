const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema


const serviceUserSchema  = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value){
            if (!validator.isEmail(value)){
                //subject to change to a custom response later
                throw new Error('Invalid Email');
            }
        }
    },
    apiKey: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        length: 32
    }
})

module.exports = mongoose.model('service_user', serviceUserSchema)
