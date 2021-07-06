module.exports = function (sequelize, DataTypes) {
  const Reader = sequelize.define('Reader', {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });

  Reader.associate = function (models) {
    Reader.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Reader;
};
