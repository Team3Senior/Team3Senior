const { Sequelize, DataTypes } = require('sequelize');

// Create Sequelize instance
const sequelize = new Sequelize(
  "team2",
  "root",
  "farahkh",
  {
    host: "localhost",
    dialect: "mysql",
  }
);
sequelize.authenticate().then(r=>console.log('connected')).catch(err => console.log(err))
// Define User model


// Define relationships between models
// User.hasMany(Cart);
// Cart.belongsTo(User);

// Cart.hasMany(Product);
// Product.belongsTo(Cart);

// Category.hasMany(Product);
// Product.belongsTo(Category);

// User.hasMany(Product);
// Product.belongsTo(User);

// Sync the models with the database
//execute one time and then comment this code (after Database and tables created!)
// sequelize.sync({ force: true }).then(() => {
//   console.log('Database and tables created!');
// }).catch(err => {
//   console.error('Error syncing database:', err);
// });
module.exports=sequelize




