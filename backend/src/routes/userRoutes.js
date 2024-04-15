import express from "express";
import userController from "../controllers/userController.js";
import { checkRequestBody } from "../middleware/checkRequestBody.js";

const userRouter = express.Router();

userRouter.get("/:userId", userController.getUserProfile);
userRouter.get("/authors/:authorId", userController.getAuthorProfile);
userRouter.put("/:userId", checkRequestBody, userController.updateUserProfile);
userRouter.post("/:id/follow", checkRequestBody, userController.followUser);
userRouter.delete("/:id/unfollow", userController.unfollowUser);
userRouter.get("/:id/followers", userController.getAllFollowers);
userRouter.delete("/:id", userController.deleteUserProfile);

export default userRouter;
