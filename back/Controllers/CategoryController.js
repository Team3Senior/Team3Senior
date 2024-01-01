const Category = require('../Models/category.js')

module.exports={
  getCategories:async(req, res) => {
      try{
    let cats=await Category.findAll()
    res.send(cats)
  }

  catch(err) {
   console.log(err);
  }
  },
  addCategory:async(req,res)=>{
    let adCat=await Category.create(req.body)
    res.json(adCat)
  }
 ,
 deletCCategory:async(req,res)=>{
    let deCat=await Category.destroy({where:{CategoryID:req.params.CategoryID}})
    res.json(deCat)
  },
  updateCategory:async(req,res)=>{
    let upCat= await Category.update(req.body,{where: {CategoryID: req.params.CategoryID}})
    res.json(upCat)
  }
}
  