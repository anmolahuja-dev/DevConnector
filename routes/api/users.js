const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// @route           POST api/users
// @description     Register User
// @access          Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check(
      'password',
      'Please Enter a password with six or more characters'
    ).isLength(6),
    check('email', 'Enter a valid email address').isEmail(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    res.send('User Route');
  }
);
module.exports = router;
