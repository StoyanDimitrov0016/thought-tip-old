import Article from "../models/Article.js";

async function createArticle(articleData) {
  const existingArticle = await Article.findOne({
    title: articleData.title,
    authorId: articleData.authorId,
  });

  if (existingArticle) {
    throw new Error("Cannot make two articles with the same title");
  }

  const newArticle = await Article.create(articleData);
  return newArticle;
}

async function getAllArticles() {
  const allArticles = await Article.find();
  return allArticles;
}

async function getArticleById(articleId) {
  //TODO: Return only if the user is liked the article or not, don't return the whole array with OjectIds
  const desiredArticle = await Article.findById(articleId);

  if (!desiredArticle) {
    throw new Error("Cannot find the article");
  }

  return desiredArticle;
}

async function updateArticle(articleId, updatedArticleData) {
  const articleForUpdating = await Article.findById(articleId);

  if (!articleForUpdating) {
    throw new Error("Article not found.");
  }

  Object.assign(articleForUpdating, updatedArticleData);
  await articleForUpdating.save();

  return articleForUpdating;
}

async function deleteArticleById(articleId) {
  return await Article.findByIdAndDelete(articleId);
}

const articleService = {
  getAllArticles,
  createArticle,
  getArticleById,
  updateArticle,
  deleteArticleById,
};

export default articleService;
