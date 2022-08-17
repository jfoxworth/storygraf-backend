const express = require("express");
const articleController = require("../controllers/article");

const router = express.Router();

router.get("/article/:articleId", articleController.getArticleById);
router.post("/article", articleController.createArticle);
router.put("/article/:articleId", articleController.updateArticle);

module.exports = router;
