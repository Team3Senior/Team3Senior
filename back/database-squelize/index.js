<<<<<<< HEAD
const { Sequelize } = require('sequelize');
=======
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

>>>>>>> dc16bc154439eb32a6ff285f790c675bf16875f0


const sequelize = new Sequelize('team3', 'root', '54196048', {
  host: 'localhost',
  dialect: 'mysql', 
});

sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
  sequelize.sync()
  .then(() => {
    console.log('Database and tables synchronized.');
  })
  .catch((error) => {
    console.error('Error synchronizing the database:', error);
  });
module.exports = sequelize;
