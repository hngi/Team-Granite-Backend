const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
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
    phone: {
        type: String,
        required: true,
        validate(value){
                if(!/^\d{11,13}$/.test(value)){
                    if(/[^\d]/.test(value)){
                        throw new Error('One or more invalid characters. Numbers only');
                    }
                //subject to change to a custom response later
                throw new Error('Phone number should consist of 11 to 13 numbers');
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value){
			if(value < 0) {
                throw new Error('Age must be a positive number');
            }
		}
    },
    address: {
        type: String,
        trim: true
    },
    gender: { 
        type: String,
        enum: ['male', 'female'],
        required: true
    },
    status: { 
        type: String,
        enum: ['ACTIVE', 'INACTIVE'],
        default: 'ACTIVE'
    },
    updated: { 
        type: Date,
    },
    avatar: {
		type: Buffer
    },
    url: {
        type: String,
        default: "N/A"
    },
    team:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'team'
    },
    company:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'company'
    }
    
});

//updated_at should be the current time only when updated
UserSchema.pre('save', function(next) {
    this.updated_at = Date.now();
    next();
});


module.exports = mongoose.model('User', UserSchema);