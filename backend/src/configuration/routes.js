import userRouter from "../routes/userRoutes.js";
import articleRouter from "../routes/articleRoutes.js";
import authRouter from "../routes/authRoutes.js";

function routesSetUp(app) {
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/articles", articleRouter);
  app.use("/api/v1/auth", authRouter);

  app.all("*", (req, res) => {
    res.status(404).json({ message: "The endpoint does not exist." });
  });
}

export default routesSetUp;
