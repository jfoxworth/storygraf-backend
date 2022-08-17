const { models } = require("../models/index");

/* Create a source  */
const createSource = async (req, res) => {
  try {
    let tempSource = req.body.tag;
    const source = await models.source.create(tempSource);
    res.status(201).json(source);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

/* Update a submitted tag  */
const updateSource = async (req, res) => {
  const { id } = req.params;
  const source = req.body;

  try {
    const thisSource = await models.source.findOne({
      where: [{ id }],
    });

    res.status(200).json({ ...thisSource.dataValues });
  } catch (error) {
    res.status(500).send(`${error.message}`);
  }
};

/* GET source based on ID  */
const getSourceById = async (req, res) => {
  res.status(200).json({ text: "hello Joshua" });
  const { id } = req.params;
  try {
    const source = await models.source.findOne({
      where: [{ id }],
    });
    res.status(200).json({ source });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

module.exports = { createSource, updateSource, getSourceById };
