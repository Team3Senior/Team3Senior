const User = require('../Models/user.js')
const bcrypt =require('bcrypt')
module.exports={
    getUsers:async(req, res) => {
    let us=await User.findAll()
    res.json(us)
  },
  addUser:async(req,res)=>{
    console.log(req.body)
    let ad=await User.bulkCreate(
      [
        {
          "UserID": 1,
          "Password": "1234",
          "Email": "farah.kh@hotmail.fr",
          "Role": "Admin",
          "FirstName": "Farah",
          "LastName": "Kharbech",
          "ConfirmPassword": "1234",
          "createdAt": "2023-12-20T12:19:14.000Z",
          "updatedAt": "2023-12-20T12:19:14.000Z"
        },
        {
          "UserID": 2,
          "Password": "salim123",
          "Email": "salim.bs@gmail.com",
          "Role": "Client",
          "FirstName": "Salim",
          "LastName": "Ben Slim",
          "ConfirmPassword": "salim123",
          "createdAt": "2023-12-20T12:12:03.000Z",
          "updatedAt": "2023-12-20T12:12:03.000Z"
        },
        {
          "UserID": 3,
          "Password": "tox445",
          "Email": "houssem.b@yahoo.fr",
          "Role": "seller",
          "FirstName": "Houssem",
          "LastName": "houcem",
          "ConfirmPassword": "tox445",
          "createdAt": "2023-12-21T17:29:29.000Z",
          "updatedAt": "2023-12-21T17:29:29.000Z"
        },
        {
          "UserID": 4,
          "Password": "boukhalout411",
          "Email": "ahmed.bou@hotmail.fr",
          "Role": "seller",
          "FirstName": "Ahmed",
          "LastName": "Boukhallout",
          "ConfirmPassword": "boukhalout411",
          "createdAt": "2023-12-21T17:30:25.000Z",
          "updatedAt": "2023-12-21T17:30:25.000Z"
        },
        {
          "UserID": 5,
          "Password": "fares0000",
          "Email": "fares.ch@outlook.com",
          "Role": "seller",
          "FirstName": "Fares",
          "LastName": "Chaouali",
          "ConfirmPassword": "fares0000",
          "createdAt": "2023-12-21T17:34:09.000Z",
          "updatedAt": "2023-12-21T17:34:09.000Z"
        },
        {
          "UserID": 6,
          "Password": "synthia770",
          "Email": "Synthia.a@outlook.com",
          "Role": "seller",
          "FirstName": "Synthia",
          "LastName": "Boss",
          "ConfirmPassword": "synthia770",
          "createdAt": "2023-12-21T17:34:55.000Z",
          "updatedAt": "2023-12-21T17:34:55.000Z"
        },
        {
          "UserID": 7,
          "Password": "karim442",
          "Email": "karim.h@outlook.com",
          "Role": "client",
          "FirstName": "karim",
          "LastName": "hagui",
          "ConfirmPassword": "karim442",
          "createdAt": "2023-12-22T10:01:14.000Z",
          "updatedAt": "2023-12-22T10:01:14.000Z"
        },
        {
          "UserID": 8,
          "Password": "salmaBelHadj",
          "Email": "salma.bl@outlook.com",
          "Role": "client",
          "FirstName": "Salma",
          "LastName": "Bel Hadj",
          "ConfirmPassword": "salmaBelHadj",
          "createdAt": "2023-12-22T10:02:28.000Z",
          "updatedAt": "2023-12-22T10:02:28.000Z"
        },
        {
          "UserID": 9,
          "Password": "christianoR",
          "Email": "ahmed.benali@outlook.com",
          "Role": "client",
          "FirstName": "Ahmed",
          "LastName": "Ben Ali",
          "ConfirmPassword": "christianoR",
          "createdAt": "2023-12-22T10:03:16.000Z",
          "updatedAt": "2023-12-22T10:03:16.000Z"
        }]
    )
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
  