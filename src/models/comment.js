const { DataTypes } = require("sequelize");

const comment = (sequelize) => {
  const comment = sequelize.define("comment", {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    // This houses all info for the comment
    info: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    // The id of the article that owns the comment
    articleId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // The id of the parent comment
    parentCommentId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return comment;
};

module.exports = comment;
