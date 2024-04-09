import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Article title is required"] },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    content: { type: String, required: [true, "Content is required"] },
    publishedDate: { type: Date, default: Date.now },
    avgReadingTime: { type: Number, required: true },
    topic: {
      type: String,
      required: [true, "Article should be related to at least one topic"],
    },
    tags: [{ type: String, index: true }],
    likesCount: { type: Number, default: 0 },
    likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model("Article", articleSchema);

export default Article;
