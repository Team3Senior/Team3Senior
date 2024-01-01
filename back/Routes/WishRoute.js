const wishRouter=require('express').Router()
const wishController = require("../Controllers/WishController")


wishRouter.post('/addwish',wishController.addwish)
wishRouter.get('/getwishes/:id',wishController.getuserwishes)
wishRouter.delete('/delete',wishController.deleteWish)
module.exports=wishRouter
