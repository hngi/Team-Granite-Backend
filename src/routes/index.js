const express = require("express");
const router = express.Router();
const userController = require('../controller/userController');
const { catchErrors } = require('../handlers/errorHandlers');



router.get('/', (req, res) => {
    res.status(200).json({ msg: "Welcome to Dockerized User Management App" });
})

//Get All Users
router.get('/getAllUsers', catchErrors(userController.getUsers))

//Add User
router.post('/addUser', catchErrors(userController.createUser));
// Remove User using their ID
router.delete('/deleteUser/:id', catchErrors(userController.removeUser));
// Update User Info
router.put('/updateUser/:id', catchErrors(userController.updateUser));
//Get Specific User
router.get('/getUser/:id', catchErrors(userController.getUser));

// More Routes
//Get First Name
router.get('/getUserFirstName/:id/firstName', catchErrors(userController.getUserFirstName));
//Set First Name
router.put('/setUserFirstName/:id/firstName', catchErrors(userController.setUserFirstname));

//Get Last Name
router.get('/getUserLastName/:id/lastName', catchErrors(userController.getUserLastName));
//Set Last Name
router.put('/setUserLastName/:id/lastName', catchErrors(userController.setUserLastname));


module.exports = router