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
  User.hasMany(Product);
  Product.belongsTo(User);
  User.hasMany(Cart);
  Cart.belongsTo(User);
  User.hasMany(Wish)
  Wish.belongsTo(User)

  module.exports= User