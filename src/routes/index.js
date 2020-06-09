const express = require("express");
const router = express.Router();
const userController = require('../controller/userController');
const { catchErrors } = require('../handlers/errorHandlers');



router.get('/', (req, res) => {
    res.status(200).json({ msg: "Welcome to Dockerized User Management App" });
})


/**
 * @swagger
 * /users:
 *  get:
 *   description: Get All Users
 *   responses:
 *    '200':
 *     description: Success
 *
 */
router.get('/users', catchErrors(userController.getUsers))


/**
 * @swagger
 * /users:
 *  post:
 *   description: Add User
 *   responses:
 *    '201':
 *     description: Success
 */
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


module.exports = router