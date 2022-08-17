const express = require("express");
const sourceController = require("../controllers/source");

const router = express.Router();

router.get("/source/:sourceId", sourceController.getSourceById);
router.post("/source", sourceController.createSource);
router.put("/source/:sourceId", sourceController.updateSource);

module.exports = router;
