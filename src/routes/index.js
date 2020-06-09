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
router.delete('/users/:id', catchErrors(userController.removeUser));
// Update User Info
router.put('/users/:id', catchErrors(userController.updateUser));
//Get Specific User
router.get('/users/:id', catchErrors(userController.getUser));

// More Routes
//Get First Name
router.get('/users/:id/firstname', catchErrors(userController.getUserFirstName));
//Set First Name
router.put('/users/:id/firstname', catchErrors(userController.setUserFirstname));

//Get Last Name
router.get('/users/:id/lastname', catchErrors(userController.getUserLastName));
//Set Last Name
router.put('/users/:id/lastname', catchErrors(userController.setUserLastname));
// GET Specific User Emai;
router.get('/user/:id/email', catchErrors(userController.getUserEmail));

module.exports = router