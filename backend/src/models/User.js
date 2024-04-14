import { mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    default:
      "https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg",
  },
  bio: {
    type: String,
    trim: true,
    maxLength: 100,
  },
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  createdAt: { type: Date, default: Date.now },
  articles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Article" }],
  favArticles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Article" }],
});

//TODO: Add virtual property to the schema for the full name

const User = mongoose.model("User", userSchema);

export default User;
