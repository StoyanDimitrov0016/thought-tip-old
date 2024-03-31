import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: { type: String, required: true },
    publishedDate: { type: Date, default: Date.now },
    avgReadingTime: { type: Number, required: true },
    topic: { type: String, required: true },
    tags: [String],
    likes: { type: Number, default: 0 },
    comments: [
      {
        authorId: { type: Schema.Types.ObjectId, ref: "User" },
        comment: String,
        date: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

const Article = mongoose.model("Article", articleSchema);

export default Article;
