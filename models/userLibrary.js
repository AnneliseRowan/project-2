module.exports = function (sequelize, DataTypes) {
  const UserLibrary = sequelize.define('UserLibrary', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    book_id: {
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.INTEGER
    },
    book_read: {
      type: DataTypes.BOOLEAN
      // allowNull: true
    },
    hardcopy: {
      type: DataTypes.BOOLEAN
      // allowNull: true
    },
    current_reading: {
      type: DataTypes.BOOLEAN
      // allowNull: true
    },
    top_3: {
      type: DataTypes.STRING
      // allowNull: true
    }
  });

  UserLibrary.associate = function (models) {
    UserLibrary.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  // UserLibrary.associate = function (models) {
  //   UserLibrary.belongsTo(models.Book, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return UserLibrary;
};
