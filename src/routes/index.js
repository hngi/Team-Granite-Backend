const express = require("express");
const router = express.Router();
const userController = require('../controller/userController');
const { catchErrors } = require('../handlers/errorHandlers');



router.get('/', (req, res) => {
    res.status(200).json({ msg: "Welcome to Dockerized User Management App" });
})

//Get All Users
router.get('/users', catchErrors(userController.getUsers));

//Add User
router.post('/user', catchErrors(userController.createUser));



// Remove User using their ID
router.delete('/user/:id', catchErrors(userController.removeUser));


// Update User Info
router.put('/user/:id', catchErrors(userController.updateUser));


//Get Specific User
router.get('/user/:id', catchErrors(userController.getUser));


// Update User Info
router.put('/users/:id', catchErrors(userController.updateUser));


//Get Specific User
router.get('/users/:id', catchErrors(userController.getUser));

// More Routes
//Get First Name
router.get('/users/:id/firstName', catchErrors(userController.getUserFirstName));


//Set First Name
router.put('/users/:id/firstName', catchErrors(userController.setUserFirstname));

//Get Last Name
router.get('/users/:id/lastName', catchErrors(userController.getUserLastName));


//Set Last Name
router.put('/users/:id/lastName', catchErrors(userController.setUserLastname));

// GET Specific User Emai;
router.get('/user/:id/email', catchErrors(userController.getUserEmail));

module.exports = router