const express = require("express");
const router = express.Router();
const userController = require('../controller/userController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', (req, res) => {
    res.status(200).json({ msg: "Welcome to Dockerized User Management App" });
})

//Get All Users
router.get('/users', catchErrors(userController.getUsers))
// Add User
router.post('/users', catchErrors(userController.createUser));
// Remove User using their ID
router.delete('/user/:id', catchErrors(userController.removeUser));
// Update User Info
router.put('/user/:id', catchErrors(userController.updateUser));
//Get Specific User
router.get('/user/:id', catchErrors(userController.getUser));

// More Routes
//Get First Name
router.get('/users/:id/firstname', catchErrors(userController.getUserFirstName));
//Set First Name
router.put('/users/:id/firstname', catchErrors(userController.setUserFirstname));

//Get Last Name
router.get('/users/:id/lastname', catchErrors(userController.getUserLastName));
//Set Last Name
router.put('/users/:id/lastname', catchErrors(userController.setUserLastname));
<<<<<<< Updated upstream
// GET Specific User Emai;
router.get('/user/:id/email', catchErrors(userController.getUserEmail));
=======

//Get Phone number
router.get('/users/:id/phoneNumber', catchErrors(userController.getphoneNumber));
//Set phone number
router.put('/users/:id/phoneNumber', catchErrors(userController.setphoneNumber));

//Get Age
router.get('/users/:id/age', catchErrors(userController.getage));
//Set age
router.put('/users/:id/age', catchErrors(userController.setage));

//Get Gender
router.get('/users/:id/gender', catchErrors(userController.getgender));
//Set gender
router.put('/users/:id/gender', catchErrors(userController.setgender));

>>>>>>> Stashed changes

module.exports = router