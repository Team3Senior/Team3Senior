
const Product=require('../Models/product')
const User=require('../Models/user')
const Category=require("../Models/category")
module.exports={
    getAll:async(req,res)=>{
        let d=await Product.findAll()
        res.json(d)},getProducts:async(req,res)=>{
          try{ let d=await Product.findAll()
          res.json(d)}
          catch(err){ res.json(err)
          }
      },
    addProd:async(req,res)=>{
      let adProd=await Product.bulkCreate(
        [
          {
            "ProductID": 1,
            "Name": "Product Name",
            "Description": "Product Description",
            "Price": "99.99",
            "Quantity": 100,
            "Rating": 5,
            "Color": "Product Color",
            "Size": "Product Size",
            "Availability": "In Stock",
            "Discount": 10,
            "ProductImage": "https://shorturl.at/BOX15",
            "createdAt": "2023-12-28T14:01:31.000Z",
            "updatedAt": "2023-12-28T14:01:31.000Z"
          },
          {
            "ProductID": 2,
            "Name": "jsg",
            "Description": "jsdgh",
            "Price": "586.20",
            "Quantity": 50,
            "Rating": 8,
            "Color": "blue",
            "Size": "xl",
            "Availability": "In Stock",
            "Discount": 6,
            "ProductImage": "https://shorturl.at/BOX15",
            "createdAt": "2023-12-28T14:01:31.000Z",
            "updatedAt": "2023-12-28T14:01:31.000Z"
          },
          {
            "ProductID": 3,
            "Name": "sqv",
            "Description": "sdn",
            "Price": "256.53",
            "Quantity": 80,
            "Rating": 7,
            "Color": "green",
            "Size": "xxl",
            "Availability": "In Stock",
            "Discount": 8,
            "ProductImage": "[https://shorturl.at/BOX15,https://shorturl.at/ekqGL]",
            "createdAt": "2023-12-28T14:01:31.000Z",
            "updatedAt": "2023-12-28T14:01:31.000Z"
          },
          {
            "ProductID": 4,
            "Name": "ssdbqv",
            "Description": "sdergn",
            "Price": "25656.53",
            "Quantity": 80,
            "Rating": 7,
            "Color": "green",
            "Size": "xxl",
            "Availability": "In Stock",
            "Discount": 8,
            "ProductImage": "['https://shorturl.at/BOX15','https://shorturl.at/ekqGL']",
            "createdAt": "2023-12-28T14:01:31.000Z",
            "updatedAt": "2023-12-28T14:24:36.000Z"
          }
        ]
      )
      
      res.json(adProd)
    }
    ,
    getOneProd:async(req,res)=>{
      let gp=await Product.findOne({where:{ProductID:req.params.ProductID}})
      res.json(gp)
    },
    deleteProd:async(req,res)=>{
      let de=await Product.destroy({where:{ProductID:req.params.ProductID}})
      res.json(de)
    },
    updateProd: async(req,res) => {
      let upProd = await Product.update(req.body,{where:{ProductID : req.params.ProductID}})
      res.json(upProd)
    },
    getProdOfUser:async(req,res)=>{
      let pu=await Product.findAll({where:{userUserID: req.params.UserID}})
      res.json(pu)
    }, 
       
    }

