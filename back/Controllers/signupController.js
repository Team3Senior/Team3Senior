const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../Models/user');
// const secretKey = 'my_secret_key_2023$#@!';
const {addUser} = require('./UserController.js');


// const generateToken = (UserID, FirstName,LastName) => {
//     const expiresIn = 60 * 60 * 48;//2days
//     return jwt.sign({ UserID, FirstName,LastName}, 'secretKey', { expiresIn: expiresIn });
//   };

  
  const Register = async (req, res) => {
    const { FirstName,LastName, Email, Password ,Role } = req.body;
  
    try {
      const hashedPassword = await bcrypt.hash(Password, 10);
  
      const newUser = {
        FirstName,
        LastName,
        Email,
        Role,
        Password: hashedPassword}
       
       addUser({ body: newUser }, res);
    } catch (error) {
      res.status(500).json({ error: 'Error' });
    }
  };
  
  
  module.exports = {
    Register
  };

