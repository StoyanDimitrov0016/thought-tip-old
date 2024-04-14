import { userService } from "../services/userService.js";

async function getUserProfile(req, res) {
  try {
    const userId = req.params.userId;
    const user = await userService.getUserProfile(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while fetching the user profile" });
  }
}

async function getAuthorProfile(req, res) {
  try {
    const authorId = req.params.authorId;
    const author = await userService.getAuthorProfile(authorId);

    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }

    res.json(author);
  } catch (error) {
    console.error(`Error fetching author profile: ${error}`);
    return res
      .status(500)
      .json({ message: "Internal server error. Please try again later." });
  }
}

async function updateUserProfile(req, res) {
  try {
    const userId = req.params.userId;
    const updatedUserData = req.body;

    const updatedUser = await userService.updateUserProfile(
      userId,
      updatedUserData
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updatedUser);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Internal server error. Please try again later." });
  }
}

async function followUser(req, res) {}

async function unfollowUser(req, res) {}

async function getAllFollowers(req, res) {}

async function deleteUserProfile(req, res) {}

const userController = {
  getUserProfile,
  getAuthorProfile,
  updateUserProfile,
  followUser,
  unfollowUser,
  getAllFollowers,
  deleteUserProfile,
};

export default userController;

// async function likeArticle(req, res) {}
// async function dislikeArticle(req, res) {}
// async function getAllUserArticles(req, res) {}
