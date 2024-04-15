import User from "../models/User.js";

async function getUserProfile(userId) {
  try {
    const desiredUser = await User.findById(userId).populate("articles", "title thumbnail preview avgReadingTime publishedDate");
    if (!desiredUser) {
      throw new Error(`User not found`);
    }
    return desiredUser;
  } catch (error) {
    console.error(
      `Failed getting user profile with id: ${userId} ---error: ${error}`
    );
    throw error;
  }
}

async function getAuthorProfile(authorId) {
  const desiredAuthor = await User.findById(authorId)
    .select("firstName lastName profilePicture")
    .populate(
      "articles",
      "title thumbnail preview avgReadingTime publishedDate"
    );

  return desiredAuthor;
}

async function updateUserProfile(userId, updatedData) {
  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { $set: updatedData },
    { new: true, runValidators: true }
  );

  return updatedUser;
}

export const userService = {
  getUserProfile,
  getAuthorProfile,
  updateUserProfile,
};
