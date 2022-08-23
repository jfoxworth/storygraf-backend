const { models } = require("../models/index");

/* Create a tag  */
const createTag = async (req, res) => {
  try {
    let tempTag = req.body.tag;
    res.status(200).json({ tempTag });
    const tag = await models.tag.create(tempTag);
    res.status(201).json(tag);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

/* Update a submitted tag  */
const updateTag = async (req, res) => {
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

/* GET tag and it's child tags based on ID  */
const getTagById = async (req, res) => {
  res.status(200).json({ text: "hello Joshua" });
  const { id } = req.params;
  try {
    const tag = await models.tag.findOne({
      where: [{ id }],
      include: [{ model: models.article }],
    });
    res.status(200).json({ tag });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

module.exports = { createTag, updateTag, getTagById };
