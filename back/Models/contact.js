const {DataTypes}=require('sequelize')
const sequelize=require('../database-squelize/index')
const Contact = sequelize.define('contact', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userName: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      userEmail: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      userNumber : {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      userMessage: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },{tableName:'contacts'});
    

module.exports= Contact