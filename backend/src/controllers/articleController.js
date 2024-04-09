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
    const desiredArticle = await articleService.getArticleById(articleId);
    res.json(desiredArticle);
  } catch (error) {
    const errorMessage = errorParser(error);
    res.status(404).json({ message: errorMessage });
  }
}

async function createArticle(req, res) {
  try {
    // TODO: create function for evaluating the real average reading time
    // TODO: extract authorId from the request.body
    const avgReadingTime = 10;
    const authorId = "660d9741cbf935091239b903";

    const articleData = req.body; // { ...req.body, authorId: req.user._id };
    articleData.avgReadingTime = avgReadingTime;
    articleData.authorId = authorId;

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
