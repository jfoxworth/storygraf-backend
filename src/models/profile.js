const { DataTypes } = require("sequelize");

const profile = (sequelize) => {
  const profile = sequelize.define("profile", {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    // This houses all info for the profile
    info: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    // Whether or not the profile is active
    active: {
      type: DataTypes.BOOLEAN,
      default: true,
    },
  });

  return profile;
};

module.exports = profile;
