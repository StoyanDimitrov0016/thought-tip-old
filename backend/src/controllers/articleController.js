import articleService from "../services/articleService.js";

async function getArticleById(req, res) {
  try {
    const articleId = req.params.id;
    const desiredArticle = await articleService.getArticleById(articleId);
    res.json(desiredArticle);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

async function createArticle(req, res) {
  try {
    const articleData = req.body; // { ...req.body, authorId: req.user._id };
    const newArticle = await articleService.createArticle(articleData);

    res.status(201).json(newArticle);
  } catch (error) {
    res.status(404).json({ message: error.message });
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
    res.status(400).json({ message: error.message });
  }
}

async function deleteArticleById(req, res) {
  try {
    const articleId = req.params.id;
    const result = await articleService.deleteArticleById(articleId);
    res.status(204).end();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

const articleController = {
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticleById,
};

export default articleController;
