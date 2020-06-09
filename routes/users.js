const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const User = require('../src/models/user');

// @route   POST /users
// @desc    Add new User
// @access  unknown
router.post('/', [
  check('firstName', 'First Name is required').not().isEmpty(),
  check('lastName', 'Last Name is required').not().isEmpty(),
  check('email', 'Please enter a valid email').isEmail(),

], 
async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { firstName, lastName, email } = req.body;

  try {

    let user = await User.findOne({ email });

    if(user) {
      return res.status(400).json({ msg: 'User already exist' });
    }

    user = new User({
      firstName,
      lastName,
      email,
      phoneNumber,
    });

    await user.save();
    res.send('User added successfully');

  } catch (err) {
    console.error(err.message);
    res.status(500).json({msg: 'Something went wrong'});

  }
});

// @route   Delete /users/delete/:id
// @desc    Remove a user
// @access  unknown
router.delete('/deleteUser/:id', getUser, async (req, res) => {
  
  try {
    await res.user.remove();
    res.json({ msg: 'User successfully removed'});

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Something went wrong'});
  }
});

// @route   Update /users/updateuser/:id
// @desc    Update User [firstName, lastName, email, phoneNumber]
// @access  unknown
router.patch('/updateuser/:id', getUser, async (req, res) => {

  if (req.body.firstName != null) {
    res.user.firstName = req.body.firstName;
  }
  if (req.body.lastName != null) {
    res.user.lastName = req.body.lastName;
  }
  if (req.body.email != null) {
    res.user.email = req.body.email;
  }
  if (req.body.phoneNumber != null) {
    res.user.phoneNumber = req.body.phoneNumber;
  }

  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);

  } catch (err) {
    console.error(err.message);
    return res.status(404).json({ msg: 'Cannot update user details' });
  }
});



// @route   Get /users/:id
// @desc    Get user details [firstName, LastName, PhoneNumber]
// @access  unknown
router.get('/:id', getUser, async (req, res) => {

  res.json(res.user);

});

async function getUser(req, res, next) {

  let user;
  try {
    user = await User.findById(req.params.id);
    if (user === null) {
      return res.status(404).json({ msg: 'Cannot find user' });
    }

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Something went wrong'});
  }

  res.user = user;
  next();
};

module.exports = router;