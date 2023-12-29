// login
const express = require('express');
const router = express.Router();
const AuthentController=require('../Controllers/AuthentController.js');

router.post('/signup', AuthentController.Register);
router.post('/login',AuthentController.Login)




module.exports = router
