const express = require("express");
const tagsController = require("../controllers/tags");

const router = express.Router();

router.get("/tags", tagsController.getTags);

module.exports = router;
