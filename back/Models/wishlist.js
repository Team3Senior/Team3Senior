const {DataTypes}=require('sequelize')
const sequelize=require('../database-squelize/index');
const Wish = sequelize.define('wish', {
    WishID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      
    },
    NameWish: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    WishImage: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    WishPrice:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    userUserID:{
        type:DataTypes.INTEGER,
        allowNull:false
      },

  });
  

console.log('helo');
  module.exports= Wish