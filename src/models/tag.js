const { DataTypes } = require("sequelize");

const tag = (sequelize) => {
  const tag = sequelize.define("tag", {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    // Info for the tag like color, description, etc
    info: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    // ID of the parent tag - null means that it is the top level
    parentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    // ID of the user that owns/created the tag
    ownerId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // True / false for if the tag is an official one or created by a user
    official: {
      type: DataTypes.BOOLEAN,
      default: false,
    },
  });

  tag.associate = (sequelize) => {
    const { tag, article } = sequelize.models;
    tag.hasMany(article, {
      foreignKey: "tagId",
    });
    tag.hasMany(tag, {
      foreignKey: "parentId",
    });
  };

  return tag;
};

module.exports = tag;
