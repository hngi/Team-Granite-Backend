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
    phoneNumber: {
        type: String,
        required: true,
        validate(value){
                if(!/^\d{11,13}$/.test(value)){
                    if(/[^\d]/.test(value)){
                        throw new Error('Invalid Characters. Only numbers are allowed');
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
                throw new Error('Age must be a positive number')
            }
		}
    }
})

export default User;