const { models } = require("../models/index");

/* Create an Comment  */
const createComment = async (req, res) => {
  try {
    let tempComment = req.body.comment;
    const comment = await models.comment.create(tempComment);
    res.status(201).json(comment);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

/* Update an Comment  */
const updateComment = async (req, res) => {
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

/* GET Comment and it's child comments based on ID  */
const getCommentById = async (req, res) => {
  const { id } = req.params;
  try {
    const Comment = await models.Comment.findOne({
      where: [{ id }],
    });
    res.status(200).json({ Comment });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

module.exports = { createComment, updateComment, getCommentById };
