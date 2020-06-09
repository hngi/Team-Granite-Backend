const express = require("express");
const session = require('express-session');
const userController = require('../controller/userController');
const { catchErrors } = require('../handlers/errorHandlers');
const auth = require('../handlers/auth');

const router = express.Router();
router.use(session({
  secret: 'team-granite backend',
  resave: false,
  saveUninitialized: false
}));

router.get('/', (req, res) => {
    res.status(200).json({ msg: "Welcome to Dockerized User Management App" });
})

//Get All Users. Later, only user.isAdmin can access this route
router.get('/users', catchErrors(userController.getUsers))

// Add User
router.post('/users', catchErrors(userController.createUser));
router.post('/login', userController.login);

//Get the current logged in User [must be logged in]
router.get('/user', auth, catchErrors(userController.getUser));
// Update profile Info [must be logged in first]
router.post('/user', auth, catchErrors(userController.updateUser));
//loggout [must have been logged in]
router.get('/logout', auth, catchErrors(userController.logout));
// Remove User using their ID, [admin only]
router.delete('/user/:id', auth, catchErrors(userController.removeUser));


// More Routes
//Get First Name [must be logged in]
router.get('/users/firstname/', auth, catchErrors(userController.getUserFirstName));
//Set First Name [must be logged in]
router.post('/users/firstname/', auth, catchErrors(userController.setUserFirstname));


module.exports = router