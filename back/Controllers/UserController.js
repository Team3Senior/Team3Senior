const User = require('../Models/user.js')
const bcrypt =require('bcrypt')
module.exports={
    getUsers:async(req, res) => {
    let us=await User.findAll()
    res.json(us)
  },
  addUser:async(req,res)=>{
    console.log(req.body)
    let ad=await User.create(req.body)
    res.json(ad)
  }
  ,
  getOneUser:async(req,res)=>{
    let go=await User.findOne({where:{UserID:req.params.UserID}})
    res.json(go)
  },
  deleteUser:async(req,res)=>{
    let de=await User.destroy({where:{UserID:req.params.UserID}})
    res.json(de)
  },
  getSellers:async(req,res)=>{
    let sel=await User.findAll({
      where: {Role: "seller"}
    })
    res.json(sel)
  },
  getOnlyClients:async(req,res)=>{
    let cl=await User.findAll({
        where: {Role: "client"}
    })
    res.json(cl)
  },
  updateUser:async(req,res)=>{
    const {FirstName,LastName,adress,Password,Email}=req.body
    const hashed=await bcrypt.hash(Password,10)
    if(hashed){
    let upd=await User.update({FirstName,LastName,Password:hashed,adress,Email,},{where:{UserID:req.params.id}})
    res.json(upd)}
    res.json('err')
  }
}
  