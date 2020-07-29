"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isArtist: {
        type: DataTypes.BOOLEAN,
        defaulValue: false,
      },
    },
    {}
  );
  user.associate = function (models) {
    user.hasMany(models.artwork);
  };
  return user;
};
