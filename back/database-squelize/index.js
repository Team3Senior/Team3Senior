

const { Sequelize } = require('sequelize');

// Create Sequelize instance
 const sequelize = new Sequelize(
  "team2",
  "root",
<<<<<<< HEAD
  "farahkh",
=======
  "root",
>>>>>>> 59a2934361bd656466705c5bcda9d4102941a000

  {
    host: "localhost",
    dialect: "mysql",
  }
);
sequelize.authenticate().then(r=>console.log('connected')).catch(err => console.log(err))

<<<<<<< HEAD

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
// execute one time and then comment this code (after Database and tables created!)
// sequelize.sync({ force: true }).then(() => {
//   console.log('Database and tables created!');
// }).catch(err => {
//   console.error('Error syncing database:', err);
// });
=======
>>>>>>> 59a2934361bd656466705c5bcda9d4102941a000
module.exports=sequelize




