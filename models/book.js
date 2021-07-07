// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/config");

// Initialize Product model (table) by extending off Sequelize's Model class
class Book extends Model {}

// set up fields and rules for Product model
Book.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    aFirstName: {
      type: DataTypes.STRING,
      allowNull: true,      
    },
    aFirstName: {
        type: DataTypes.STRING,
        allowNull: true,      
    },
    isbn: {
    type: DataTypes.STRING,
    allowNull: false,      
    }, 
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "book",
  }
);

module.exports = Book;