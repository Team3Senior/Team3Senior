// signup
const express = require('express');
const signupController=require('../Controllers/signupController.js');
const signupRouter = express.Router();

signupRouter.post('/signup', signupController.Register);





module.exports = signupRouter