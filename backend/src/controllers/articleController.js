import articleService from "../services/articleService.js";
import { errorParser } from "../utils/errorParser.js";

async function getAllArticles(req, res) {
  try {
    const allArticles = await articleService.getAllArticles();
    res.json(allArticles);
  } catch (error) {
    const errorMessage = errorParser(error);
    res.status(404).json({ message: errorMessage });
  }
}

async function getArticleById(req, res) {
  try {
    const articleId = req.params.id;
    const userId = req.user._id;

    const desiredArticle = await articleService.getArticleById(
      articleId,
      userId
    );
    
    res.json(desiredArticle);
  } catch (error) {
    const errorMessage = errorParser(error);
    res.status(404).json({ message: errorMessage });
  }
}

async function createArticle(req, res) {
  try {
    const author = req.user._id;
    const articleData = req.body;

    const avgReadingTime = Math.ceil(
      articleData.content.split(" ").length / 238
    );

    articleData.avgReadingTime = avgReadingTime;
    articleData.author = author;

    const newArticle = await articleService.createArticle(articleData);

    res.status(201).json(newArticle);
  } catch (error) {
    const errorMessage = errorParser(error);
    res.status(404).json({ message: errorMessage });
  }
}

async function updateArticle(req, res) {
  try {
    const articleId = req.params.id;
    const articleData = req.body; // { ...req.body, authorId: req.user._id };

    const updatedArticleData = await articleService.updateArticle(
      articleId,
      articleData
    );

    res.json(updatedArticleData);
  } catch (error) {
    const errorMessage = errorParser(error);
    res.status(404).json({ message: errorMessage });
  }
}

async function deleteArticleById(req, res) {
  try {
    const articleId = req.params.id;
    const result = await articleService.deleteArticleById(articleId);
    res.json(result);
  } catch (error) {
    const errorMessage = errorParser(error);
    res.status(404).json({ message: errorMessage });
  }
}

const articleController = {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticleById,
};

export default articleController;
