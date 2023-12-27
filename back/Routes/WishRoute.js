const wishRouter=require('express').Router()
const wishController = require("../Controllers/WishController")


wishRouter.post('/addwish',wishController.addwish)
wishRouter.get('/getwishes/:id',wishController.getuserwishes)
module.exports=wishRouter
