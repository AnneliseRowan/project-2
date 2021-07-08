module.exports = function (sequelize, DataTypes) {
  const UserLibrary = sequelize.define('UserLibary', {
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
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    hardcopy: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    current_reading: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    top_3: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: true
  });

  UserLibrary.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());
    delete values.password;
    return values;
  };

  return UserLibrary;
};
