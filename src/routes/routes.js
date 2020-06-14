const express = require('express');
const router = express.Router();

const newUser = require('../controllers/userController');
const company = require('../controllers/companyController');
const upload = require('../controllers/upload');
const auth = require('../middleware/auth')

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
router.get('/users/:id',auth, newUser.getUser);

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

//Get Avatar
router.get('/users/:id/avatar',auth, newUser.getUserAvatar);

//Set Avatar
router.put('/users/:id/avatar',auth, upload.single('avatar'), newUser.setUserAvatar);

//Delete Avatar
router.delete('/users/:id/avatar',auth, newUser.removeUserAvatar);

//Add user to a team
//done
router.post('/companies/teams/:teamId/users/:userId', auth, company.setUserTeam);

//Get a users team
//done
router.get('/companies/teams/users/:id',auth, company.getUserTeam);

//Get a users company
//done
router.get('/companies/user/:id', auth, company.getUserCompany);

//Add user to a company
//done
router.post('/companies/:companyId/users/:userId', auth, company.setUserCompany);

//Create new company
//done
router.post('/companies', auth, company.createCompany);

//create a new team
//done
router.post('/companies/:id/teams', auth, company.createTeam);

//Get All companies
//done
router.get('/companies', auth, company.getAllCompanies);

//Get a company
//done
router.get('/companies/:id', auth, company.getCompany);

//Get users
//done
router.get('/companies/:id/users', auth, company.getCompanyMembers);

//Get team members
//done
router.get('/companies/team/:id/users', auth, company.getTeamMembers);

//Get Teams under a company
//done
router.get('/companies/:id/teams', auth, company.getAllTeams);

//Handle 404 Errors
router.all('*', (req, res) => {
    res.status(404).json({ status: 404, data: "404 - Page Not Found" });
});

module.exports= router;
