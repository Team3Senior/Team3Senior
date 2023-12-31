const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../Models/user');


const generateToken = (UserID,Role) => {
    const expiresIn = 60 * 60 * 48;//2days
    return jwt.sign({ UserID, Role}, 'secretKey', { expiresIn: expiresIn });
  };

  
  
  const Login = async(req, res) => {
      const {Email,Password}=req.body;
      try {
           const result= await User.findOne({ where :{Email:Email}})
           if(result ===null) res.send("email not found")
           else {
            const verif=result.dataValues.Password
            const passwordMatch = await bcrypt.compare(Password,verif)
// console.log("verif",verif)
// console.log("pw",Password)
// console.log("result",result)
// console.log("passmatch", passwordMatch)


            if(passwordMatch){
               const token=generateToken(result.dataValues.UserID, result.dataValues.FirstName, result.dataValues.LastName, result.dataValues.Role)  
               result.dataValues.token=token
              res.send(result.dataValues)
            }
            else{
              res.send("Wrong Passeword")
            }
            
        }
      
      }
      catch (error) {res.status(500).json(error)}
  };
  
  module.exports = {
    Login
  };

