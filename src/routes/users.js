const express = require('express')
const router = express.Router()
const user = require('../models/userModel')
    
//getting all users
router.get('/', async (req, res) => {
    try {
       const users = await user.find()
       res.json(users)  
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

//getting one user
router.get('/:id', getUser, (req, res) => {
 res.json(res.userss)
})

// creating a user
router.post('/', async (req, res) => {
    const userss = new user({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
        address: req.body.address
    })

    try {
        const newUser = await userss.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({message: err.message})
        
    }
})

//updating a user 
router.patch('/:id', getUser, async (req, res) => {
    if (req.body.firstName !=null) {
        res.userss.firstName = req.body.firstName
    }
    if (req.body.lastName != null) {
        res.userss.lastName = req.body.lastName
    }
    if (req.body.email != null) {
        res.userss.email = req.body.email
    }
    if (req.body.phone != null) {
        res.userss.phone = req.body.phone
    }
    if (req.body.gender != null) {
        res.userss.gender = req.body.gender
    }
    if (req.body.address != null) {
        res.userss.address = req.body.address
    }

    try {
        const updateUser = await res.userss.save()
        res.json(updateUser)
    } catch (err) {
        res.status(400).json({message: err.message})
        
    }
})

//deleating a user
router.delete('/:id', getUser, async (req, res) => {
    try {
        await res.userss.remove()
        res.json({message: 'deleted user'})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

async function getUser(req, res, next) {
    try {
        userss = await user.findById(req.params.id)
        if (userss == null){
            return res.status(404).json({message: 'cannot find user'})
        }
    } catch (err) {
       return res.status(500).json({message: err.message}) 
    }

    res.userss = userss
    next()
}


 module.exports = router