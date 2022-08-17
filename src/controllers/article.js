const { models } = require("../models/index");

/* Create an article  */
const createArticle = async (req, res) => {
  try {
    let tempTag = req.body.tag;
    const tag = await models.tag.create(tempTag);
    res.status(201).json(tag);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

/* Update an article  */
const updateArticle = async (req, res) => {
  const { token } = req.params;
  const tag = req.body;

  try {
    const thisTag = await models.tag.findOne({
      where: [{ token: token }],
    });

    res.status(200).json({ ...thisTag.dataValues });
  } catch (error) {
    res.status(500).send(`${error.message}`);
  }
};

/* GET article and it's child comments based on ID  */
const getArticleById = async (req, res) => {
  const { id } = req.params;
  try {
    const article = await models.article.findOne({
      where: [{ id }],
      include: [{ model: models.comment }],
    });
    res.status(200).json({ article });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

module.exports = { createArticle, updateArticle, getArticleById };
