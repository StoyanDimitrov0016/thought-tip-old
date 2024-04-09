import { Router } from "express";
import articleController from "../controllers/articleController.js";

const articleRouter = Router();

articleRouter.get("/", articleController.getAllArticles);
articleRouter.get("/:id", articleController.getArticleById);
articleRouter.post("/", articleController.createArticle);
articleRouter.put("/:id", articleController.updateArticle);
articleRouter.delete("/:id", articleController.deleteArticleById);

export default articleRouter;