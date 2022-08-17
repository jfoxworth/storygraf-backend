const { DataTypes } = require("sequelize");

const source = (sequelize) => {
  const source = sequelize.define("source", {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    // This houses all info for the source
    info: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    // Whether or not the source is approved
    approved: {
      type: DataTypes.BOOLEAN,
      default: false,
    },
  });

  return source;
};

module.exports = source;
