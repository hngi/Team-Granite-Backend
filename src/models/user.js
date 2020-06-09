import mongoose from 'mongoose';
import validator from 'validator';


const User = mongoose.model('User', {
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
        trim: true,
        lowercase: true,
        validate(value){
            if (!validator.isEmail(value)){
                //subject to change to a custom response later
                throw new Error('Invalid Email');
            }
        }
    },
    phoneNumber: {
        type: String,
        required: true,
        validate(value){
            if (value.length < 11 || value.length > 13){
                //subject to change to a custom response later
                throw new Error('Invalid Phone Number');
            }
        }
    },
    age: {
        type: Number,
        default: 0
    }
})

export default User;