const bcrypt = require('bcrypt');

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'User already exists'
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: {
        args: true,
        msg: 'Username already exists'
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
    // contact: {
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: true
    // }
  }, {
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
    hooks: {
      beforeValidate: function (user) {
        if (user.changed('password')) {
          return bcrypt.hash(user.password, 10).then((password) => {
            user.password = password;
          });
        }
      }
    }
  });

  User.associate = function (models) {
    User.hasMany(models.Example, {
      onDelete: 'cascade'
    });
  };

  User.associate = function (models) {
    User.hasMany(models.UserLibrary, {
      targetKey: 'user_id',
      onDelete: 'CASCADE',
      hooks: true
    });
  };

  // This will check if an unhashed password can be compared to the hashed password stored in our database
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  // Compares passwords
  User.prototype.comparePasswords = function (password, callback) {
    bcrypt.compare(password, this.password, (error, isMatch) => {
      if (error) {
        return callback(error);
      }
      return callback(null, isMatch);
    });
  };

  User.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());
    delete values.password;
    return values;
  };

  return User;
};
