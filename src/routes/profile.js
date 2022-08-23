const express = require("express");
const profileController = require("../controllers/profile");

const router = express.Router();

router.get("/profile/:profileId", profileController.getProfileById);
router.post("/profile", profileController.createProfile);
router.put("/profile/:profileId", profileController.updateProfile);

module.exports = router;
