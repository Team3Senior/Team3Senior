

const { Sequelize } = require('sequelize');

// Create Sequelize instance
const sequelize = new Sequelize(
  "team3",
  "root",
  "root",

  {
    host: "localhost",
    dialect: "mysql",
  }
);
sequelize.authenticate().then(r=>console.log('connected')).catch(err => console.log(err))

module.exports=sequelize




