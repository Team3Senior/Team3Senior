// login
const express = require('express');
const loginRouter = express.Router();
const loginController=require('../Controllers/loginController.js');


loginRouter.post('/login', loginController.Login)




module.exports = loginRouter
