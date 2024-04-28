import requesterHTTP from "./apiRequester";

const BASE_URL = "http://localhost:7000/api/v1/articles";

const getAllArticles = async () => {
  const articles = await requesterHTTP.get(BASE_URL);
  return articles;
};

const getArticleById = async (articleId) => {
  try {
    const url = `${BASE_URL}/${articleId}`;
    const article = await requesterHTTP.get(url);
    return article;
  } catch (error) {
    console.log(error);
  }
};

const createArticle = async (articleData) => {
  const result = await requesterHTTP.post(BASE_URL, articleData);
  return result;
};

const updateArticle = async (articleData) => {
  const articleId = articleData._id;
  const url = `${BASE_URL}/${articleId}`;

  const result = await requesterHTTP.put(url, articleData);
  return result;
};

const deleteArticle = async (articleId) => {
  const result = await requesterHTTP.delete(`${BASE_URL}/${articleId}`);
  return result;
};

const articleService = {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
};

export default articleService;
