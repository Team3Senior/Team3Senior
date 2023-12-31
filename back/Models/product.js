const  {DataTypes}=require('sequelize')
const sequelize = require('../database-squelize/index')

const Product = sequelize.define('product', {
    ProductID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Color: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    Size: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    Availability: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    Discount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ProductImage: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  },{tableName:'products'});
Product.bulkCreate([
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
]).then((data)=>{
  console.log(data)
}).catch((err)=>{
  console.log(err)
})
module.exports= Product;