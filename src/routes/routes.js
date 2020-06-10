const express = require('express');
const router = express.Router();

const newUser = require('../controllers/userController');

router.get('/', (req, res) => {
    
    res.status(200).json({ 
        msg: "Welcome to Dockerized User Management App" 
    });
})

//Add user
router.post('/user', newUser.addUser);

//remove user
router.delete('/user/:id', newUser.removeUser);

//Get All users
router.get('/users', newUser.getAllUsers);

//Get User
router.get('/user/:id', newUser.getUser);

//Get first name
router.get('/users/:id/firstName', newUser.getUserFirstName);

//Set first name
router.put('/users/:id/firstName', newUser.setUserFirstName);

//Get last name
router.get('/users/:id/lastName', newUser.getUserLastName);

//Set last name
router.put('/users/:id/lastName', newUser.setUserLastName);

//Get user email
router.get('/users/:id/email', newUser.getUserEmail);

//set user email
router.put('/users/:id/email', newUser.setUserEmail);

//Get user phone
router.get('/users/:id/phone', newUser.getUserPhone);

//set user phone
router.put('/users/:id/phone', newUser.setUserPhone);

//get user age
router.get('/users/:id/age', newUser.getUserAge);

//set user age
router.put('/users/:id/age', newUser.setUserAge);

//set user status
router.put('/users/:id/status', newUser.setUserStatus);

//get user status
router.get('/users/:id/status', newUser.getUserStatus);

//get user gender
router.get('/users/:id/gender', newUser.getUserGender);

//set user gender
router.put('/users/:id/gender', newUser.setUserGender);

//set user address
router.put('/users/:id/address', newUser.setUserAddress);

//get user address
router.get('/users/:id/address', newUser.getUserAddress);

//get user password
router.get('users/:id/password', newUser.getUserPassword);

//get active users
router.get('/users/status/active', newUser.getActiveUsers);

//get inactive users
router.get('/users/status/inactive', newUser.getInActiveUsers);

module.exports= router;
