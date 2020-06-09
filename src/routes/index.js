const express = require("express");
const session = require('express-session');
const userController = require('../controller/userController');
const auth = require('../handlers/auth');

const router = express.Router();
router.use(session({
  secret: 'team-granite backend',
  resave: false,
  saveUninitialized: false
}));


router.get('/', (req, res) => {
  res.render('index', { title: " Dockerized User Management App" });
});

//Get All Users. Later, only user.isAdmin can access this route
router.get('/users', userController.getUsers)

// Add User
router.post('/users', userController.createUser);
router.post('/login', userController.login);

//Get the current logged in User [must be logged in]
router.get('/user', auth, userController.getUser);
// Update profile Info [must be logged in first]
router.post('/user', auth, userController.updateUser);
//loggout [must have been logged in]
router.get('/logout', auth, userController.logout);
// Remove User using their ID, [admin only]
router.delete('/user/:id', auth, userController.removeUser);


// More Routes
//Get First Name [must be logged in]
router.get('/users/firstname/', auth, userController.getUserFirstName);
//Set First Name [must be logged in]
router.post('/users/firstname/', auth, userController.setUserFirstname);


module.exports = router