module.exports = function (sequelize, DataTypes) {
  const Book = sequelize.define('Book', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING
    },
    author: {
      type: DataTypes.STRING,

      allowNull: true
    }
    // isbn: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   defaultValue: 1000
    // }

  });

  // Book.associate = function (models) {
  //   Book.hasMany(models.userLibrary, {
  //     foreignKey: "book_id",
  //   });
  // };

  return Book;
};
