const express = require('express');
const router = express.Router();

// @route POST /users
router.post('/', (req, res) => {
  res.send('Register a user');
});

module.exports = router;