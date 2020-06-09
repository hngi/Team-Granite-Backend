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
    },
    gender:{
        type: String,
        required: true,
        validate(value){
            var genderM=form.gender_male;
            var genderF=form.gender_female;

            if(genderM.checked==false && genderF.checked==false){
                alart("You must select male or female");
                return false;
            }
        }
    },
    status:{
        type: String,
        required: true,
        validate(value){
            var status=active;
            var status=inactive;

            if( status.checked==false && status.checked==false){
                alart("You must select active or inactive");
                return false;
            }
        }
    },
    
})

export default User;
