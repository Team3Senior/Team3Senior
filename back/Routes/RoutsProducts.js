const prodRouter=require('express').Router()
const productController=require('../Controllers/ControllerProducts')

prodRouter.get('/allProducts',productController.getProducts)
prodRouter.get('/getOneProd/:ProductID',productController.getOneProd)
prodRouter.post('/addProd',productController.addProd)
prodRouter.delete('/deleteProd/:ProductID',productController.deleteProd)
prodRouter.put('/updateProd/:ProductID',productController.updateProd)







module.exports= prodRouter;