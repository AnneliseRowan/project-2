module.exports = function (sequelize, DataTypes) {
  const Book = sequelize.define('Book', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aFirstName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aLastName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  // Book.associate = function (models) {
  //   Book.hasMany(models.userLibrary, {
  //     foreignKey: "book_id",
  //   });
  // };

  return Book;
};
