const CategoryRouter = require('express').Router();
const categController = require('../Controllers/CategoryController.js');
CategoryRouter.get("/allCategories",categController.getCategories );
CategoryRouter.post("/addCategory",categController.addCategory);
CategoryRouter.delete("/deleteCategory/:CategoryID",categController.deletCCategory);
CategoryRouter.put("/updateCategory/:CategoryID",categController.updateCategory);





module.exports = CategoryRouter;