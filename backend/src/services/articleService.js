import Article from "../models/Article.js";

async function createArticle(articleData) {
  try {
    const existingArticle = await Article.findOne({
      title: articleData.title,
      authorId: articleData.authorId,
    });

    if (existingArticle) {
      throw new Error(
        `Article with this title: ${articleData.title} already exists.`
      );
    }

    const newArticle = await Article.create(articleData);
    return newArticle;
  } catch (error) {
    console.error(
      `Failed creating article with title:${articleData.title} ---error:${error}`
    );
    return error;
  }
}

async function getArticleById(articleId) {
  //TODO: Return only if the user is liked the article or not, don't return the whole array with OjectIds
  try {
    const desiredArticle = await Article.findById(articleId);

    if (!desiredArticle) {
      throw new Error(`Cannot find an article with id: ${articleId}`);
    }

    return desiredArticle;
  } catch (error) {
    console.error(
      `Failed finding article with id: ${articleId} ---error: ${error}`
    );
    throw error;
  }
}

async function updateArticle(articleId,updatedArticleData) {
  try {
    const articleForUpdating = await Article.findById(articleId);

    if (!articleForUpdating) {
      throw new Error("Article not found.");
    }

    Object.assign(articleForUpdating, updatedArticleData);
    await articleForUpdating.save();

    return articleForUpdating;
  } catch (error) {
    console.error(
      `Error updating article with id:${updatedArticleData._id} ---error: ${error}`
    );
    throw error;
  }
}

async function deleteArticleById(articleId) {
  try {
    await Article.findByIdAndDelete(articleId);
  } catch (error) {
    console.error(
      `Failed deletion of an article with id:${articleId} ---error:${error} `
    );
    return error;
  }
}

const articleService = {
  createArticle,
  getArticleById,
  updateArticle,
  deleteArticleById,
};

export default articleService;
