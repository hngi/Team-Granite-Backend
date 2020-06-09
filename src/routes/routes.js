const express = require('express');
const router = express.Router();

const newUser = require('../controllers/user');

router.get('/', (req, res) => {
    
    res.status(200).json({ 
        msg: "Welcome to Dockerized User Management App" 
    });
})

//Add user
router.post('/user', newUser.addUser);

//remove user
router.delete('/user', newUser.removeUser);

//Get users
router.get('/users', newUser.getAllUsers);

//Get first name
router.get('/users/:id/firstname', newUser.getUserFirstName);

//Set first name
router.put('/users/:id/firstname', newUser.setUserFirstName);

//Get last name
router.get('/users/:id/lastname', newUser.getUserLastName);

//Set last name
router.put('/users/:id/lastname', newUser.setUserLastName);

//Get user email
router.get('/users/:id/lastname', newUser.getUserEmail);

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
router.get('/users/:id/address', newUser.setUserAddress);


module.exports= router;