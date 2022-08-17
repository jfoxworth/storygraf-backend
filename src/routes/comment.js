const express = require("express");
const commentController = require("../controllers/comment");

const router = express.Router();

router.get("/comment/:commentId", commentController.getCommentById);
router.post("/comment", commentController.createComment);
router.put("/comment/:commentId", commentController.updateComment);

module.exports = router;
