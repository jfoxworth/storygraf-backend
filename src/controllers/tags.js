const { models } = require("../models/index");

/* GET all official tags */
const getTags = async (req, res) => {
  res.status(200).json({ text: "hello Joshua" });
  try {
    const tag = await models.tag.findAll({
      where: [{ offical: true, parentId: null }],
    });
    res.status(200).json({ tag });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

module.exports = { getTags };
