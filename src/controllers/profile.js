const { models } = require("../models/index");

/* Create a profile  */
const createProfile = async (req, res) => {
  try {
    let tempProfile = req.body.profile;
    const profile = await models.profile.create(tempProfile);
    res.status(200).json(profile);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

/* Update a profile  */
const updateProfile = async (req, res) => {
  const { token } = req.params;
  const profile = req.body;

  try {
    const thisProfile = await models.profile.findOne({
      where: [{ token: token }],
    });

    res.status(200).json({ ...thisProfile.dataValues });
  } catch (error) {
    res.status(500).send(`${error.message}`);
  }
};

/* GET profile based on ....  */
const getProfileById = async (req, res) => {
  const { id } = req.params;
  try {
    const profile = await models.profile.findOne({
      where: [{ id }],
    });
    res.status(200).json({ profile });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

module.exports = { createProfile, updateProfile, getProfileById };
