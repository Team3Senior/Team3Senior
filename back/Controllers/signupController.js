const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {addUser} = require('./UserController.js');
const User = require('../Models/user');

  
  const Register = async (req, res) => {
    const { FirstName,LastName, Email, Password ,Role } = req.body;
  
    const alreadyExistsUser = await User.findOne({ where: { Email } }).catch(
      (err) => {
        console.log("Error: ", err);
      }
    );

    if (alreadyExistsUser) {
      return res.status(409).json({ message: "User with email already exists!" });
    }
  
    try {
      const hashedPassword = await bcrypt.hash(Password, 10);
  
      const newUser = {
        FirstName,
        LastName,
        Email,
        Role,
        Password: hashedPassword}
       
       const savedUser = await addUser({ body: newUser }, res);
       if (savedUser) res.json({ message: "Thanks for registering" })
    } catch (error) {
      res.status(500).json({ error: 'Error' });
    }
    
  };
  
  
  module.exports = {
    Register
  };

