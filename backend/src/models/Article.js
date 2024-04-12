import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Article title is required"] },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    thumbnail: { type: String },
    preview: { type: String },
    content: { type: String, required: [true, "Content is required"] },
    publishedDate: { type: Date, default: Date.now },
    avgReadingTime: { type: Number, required: true },
    topic: {
      type: String,
      required: [true, "Article should be related to at least one topic"],
    },
    tags: [{ type: String, index: true }],
    likedBy: [
      { type: mongoose.Schema.Types.ObjectId, ref: "User", index: true },
    ],
  },
  {
    timestamps: true,
  }
);

// articleSchema.methods.isUserLiked = function (userId) {
//   return this.likedBy.some(id => id.toString() === userId.toString());
// };

// articleSchema.virtual("likesCount").get(function () {
//   return this.likedBy.length;
// });

const Article = mongoose.model("Article", articleSchema);

export default Article;
