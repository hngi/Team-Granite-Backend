const express = require('express');
const router = express.Router();

const newUser = require('../controllers/userController');
const upload = require('../controllers/upload');

// GET response for '/'
router.get('/', (req, res) => {
    
    res.status(200).json({ 
        msg: "Welcome to Dockerized User Management App [by TEAM GRANITE]" 
    });
});
//Add user
router.post('/v1/user', newUser.addUser);

//remove user
router.delete('/v1/user/:id', newUser.removeUser);

//Get All users
router.get('/v1/users', newUser.getAllUsers);

//Get User
router.get('/v1/user/:id', newUser.getUser);

//Get first name
router.get('/v1/users/:id/firstName', newUser.getUserFirstName);

//Set first name
router.put('/v1/users/:id/firstName', newUser.setUserFirstName);

//Get last name
router.get('/v1/users/:id/lastName', newUser.getUserLastName);

//Set last name
router.put('/v1/users/:id/lastName', newUser.setUserLastName);

//Get user email
router.get('/v1/users/:id/email', newUser.getUserEmail);

//set user email
router.put('/v1/users/:id/email', newUser.setUserEmail);

//Get user phone
router.get('/v1/users/:id/phone', newUser.getUserPhone);

//set user phone
router.put('/v1/users/:id/phone', newUser.setUserPhone);

//get user age
router.get('/v1/users/:id/age', newUser.getUserAge);

//set user age
router.put('/v1/users/:id/age', newUser.setUserAge);

//set user status
router.put('/v1/users/:id/status', newUser.setUserStatus);

//get user status
router.get('/v1/users/:id/status', newUser.getUserStatus);

//get user gender
router.get('/v1/users/:id/gender', newUser.getUserGender);

//set user gender
router.put('/v1/users/:id/gender', newUser.setUserGender);

//set user address
router.put('/v1/users/:id/address', newUser.setUserAddress);

//get user address
router.get('/v1/users/:id/address', newUser.getUserAddress);

//get active users
router.get('/v1/users/status/active', newUser.getActiveUsers);

//get inactive users
router.get('/v1/users/status/inactive', newUser.getInActiveUsers);


//get non admin users
router.get('/v1/users/level/intern', newUser.getInternUsers);

//get mentor users
router.get('/v1/users/level/mentor', newUser.getMentorUsers);

//Get Avatar
router.get('/v1/users/:id/avatar', newUser.getUserAvatar);

//Set Avatar
router.put('/v1/users/:id/avatar', upload.single('avatar'), newUser.setUserAvatar);

//Delete Avatar
router.delete('/v1/users/:id/avatar', newUser.removeUserAvatar);


module.exports= router;
