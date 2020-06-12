const express = require('express');
const router = express.Router();

const newUser = require('../controllers/userController');
const company = require('../controllers/companyController');
const upload = require('../controllers/upload');
const auth = require('../middleware/auth')


// GET response for '/'
router.get('/', (req, res) => {
    
    res.redirect('/');
})

//generate token
router.get('/token', newUser.generateToken);

//create service user
router.post('/addServiceUser', newUser.addServiceUser);

//Add user
router.post('/users',auth, newUser.addUser);

//remove user
router.delete('/users/:id',auth, newUser.removeUser);

//Get All users
router.get('/users',auth, newUser.getAllUsers);

//Get User
router.get('/user/:id',auth, newUser.getUser);

//Get first name
router.get('/users/:id/firstName',auth, newUser.getUserFirstName);

//Set first name
router.put('/users/:id/firstName',auth, newUser.setUserFirstName);

//Get last name
router.get('/users/:id/lastName',auth, newUser.getUserLastName);

//Set last name
router.put('/users/:id/lastName',auth, newUser.setUserLastName);

//Get user email
router.get('/users/:id/email',auth, newUser.getUserEmail);

//set user email
router.put('/users/:id/email',auth, newUser.setUserEmail);

//Get user phone
router.get('/users/:id/phone',auth, newUser.getUserPhone);

//set user phone
router.put('/users/:id/phone',auth, newUser.setUserPhone);

//get user age
router.get('/users/:id/age',auth, newUser.getUserAge);

//set user age
router.put('/users/:id/age',auth, newUser.setUserAge);

//set user status
router.put('/users/:id/status',auth, newUser.setUserStatus);

//get user status
router.get('/users/:id/status',auth, newUser.getUserStatus);

//set user level
router.put('/users/:id/level',auth, newUser.setUserLevel);

//get user level
router.get('/users/:id/level',auth, newUser.getUserLevel);

//get user gender
router.get('/users/:id/gender',auth, newUser.getUserGender);

//set user gender
router.put('/users/:id/gender',auth, newUser.setUserGender);

//set user address
router.put('/users/:id/address',auth, newUser.setUserAddress);

//get user address
router.get('/users/:id/address',auth, newUser.getUserAddress);

//get active users
router.get('/users/status/active',auth, newUser.getActiveUsers);

//get inactive users
router.get('/users/status/inactive',auth, newUser.getInActiveUsers);

//get non admin users
router.get('/users/level/intern',auth, newUser.getInternUsers);

//get mentor users
router.get('/users/level/mentor',auth, newUser.getMentorUsers);

//Get Avatar
router.get('/users/:id/avatar',auth, newUser.getUserAvatar);

//Set Avatar
router.put('/users/:id/avatar',auth, upload.single('avatar'), newUser.setUserAvatar);

//Delete Avatar
router.delete('/users/:id/avatar',auth, newUser.removeUserAvatar);

//Add Companies
router.post('/companies/:id/team', auth, company.setUserTeamName);


module.exports= router;
