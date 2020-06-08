const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
  userId: { type: Number, required: true },
  username: { type: String, required: true, unique: true, trim: true, minLength: 3 },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true }
},
{ timestamps: true });
userSchema.pre('save', function(next){
  
    const user = this;
    if(user.isNew){
      let salt = bcrypt.genSaltSync(10);
      let hashed = bcrypt.hashSync(user.password, salt);
      user.password = hashed;
    }
    next();
});

const user = mongoose.model('User', userSchema);

module.exports=user;