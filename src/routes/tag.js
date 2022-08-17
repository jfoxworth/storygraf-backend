const express = require("express");
const tagController = require("../controllers/tag");

const router = express.Router();

router.get("/tag/:tagId", tagController.getTagById);
router.post("/tag", tagController.createTag);
router.put("/tag/:token", tagController.updateTag);

module.exports = router;
