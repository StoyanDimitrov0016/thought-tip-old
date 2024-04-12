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
  const allArticles = await Article.find()
    .select("-content -likedBy")
    .populate({
      path: "author",
      select: "firstName lastName profilePicture",
    });
console.log(allArticles)
  return allArticles;
}

async function getArticleById(articleId, userId) {
  const desiredArticle = await Article.findById(articleId)
    .populate({
      path: "author",
      select: "firstName lastName profilePicture",
    })
    .lean();

  if (!desiredArticle) {
    throw new Error("Cannot find the article");
  }

  const isUserLiked = desiredArticle.likedBy.includes(userId);
  const likesCount = desiredArticle.likedBy.length;

  desiredArticle.isUserLiked = isUserLiked;
  desiredArticle.likesCount = likesCount;

  delete desiredArticle.likedBy;

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
