const bcrypt = require('bcrypt');
// Got the correct module information but haven't touched hooks and below
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
    timestamps: true,
    hooks: {
      beforeValidate: function (userLibary) {
        if (userLibary.changed('password')) {
          return bcrypt.hash(userLibary.password, 10).then((password) => {
            userLibary.password = password;
          });
        }
      }
    }
  });

  UserLibrary.associate = function (models) {
    UserLibrary.hasMany(models.Examples, {
      onDelete: 'cascade'
    });
  };

  // This will check if an unhashed password can be compared to the hashed password stored in our database
  UserLibrary.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  // Compares passwords
  UserLibrary.prototype.comparePasswords = function (password, callback) {
    bcrypt.compare(password, this.password, (error, isMatch) => {
      if (error) {
        return callback(error);
      }
      return callback(null, isMatch);
    });
  };

  UserLibrary.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());
    delete values.password;
    return values;
  };

  return UserLibrary;
};
