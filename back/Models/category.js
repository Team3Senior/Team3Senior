const {DataTypes}=require('sequelize')
const sequelize=require('../database-squelize/index')
const Product =require('../Models/product')


const Category = sequelize.define('category', {
    CategoryID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    NameCategory: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    CategoryImage: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  });

console.log('helo');
  module.exports= Category