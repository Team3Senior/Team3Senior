// login
const express = require('express');
const router = express.Router();
const authController=require('../Controllers/AuthenticationLogin');

router.post('/signup', authController.signUpUser);
router.post('/login',authController.login)




module.exports = router
