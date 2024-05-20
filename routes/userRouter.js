const express = require('express');
const {handleUserLogin,handleUserSignup} = require('../constrollers/user');

const router = express.Router();

router.post('/signup',handleUserSignup);
router.post('/login',handleUserLogin);

module.exports= router;