const {DataTypes,Sequelize} =require('sequelize')
const Product=require('../Models/product.js')
const Cart=require('../Models/cart.js')
const Wish=require('../Models/wishlist.js')
const sequelize=require('../database-squelize/index.js')

const User = sequelize.define('user', {
    UserID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Password: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    Email: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    Role: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    FirstName: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    LastName: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    ConfirmPassword: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },
      adress:{
        type:DataTypes.TEXT,
        allowNull:true,
        
      }
  },{tableName:'users'});
 User.bulkCreate( [
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
  }]).then((data)=>console.log(data)).catch(err=>console.log(err))
  // User.hasMany(Product);
  // Product.belongsTo(User);
  // User.hasMany(Cart);
  // Cart.belongsTo(User);
  // User.hasMany(Wish)
  // Wish.belongsTo(User)

  module.exports= User