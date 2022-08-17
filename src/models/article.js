const { DataTypes } = require("sequelize");

const article = (sequelize) => {
  const article = sequelize.define("article", {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    // This houses all info for the article
    info: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    // The id of the tag that owns the article
    tagId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // The clean, reproducible url of the article
    articleUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  article.associate = (sequelize) => {
    const { article, comment } = sequelize.models;
    article.hasMany(comment, {
      foreignKey: "articleId",
    });
  };

  return article;
};

module.exports = article;
