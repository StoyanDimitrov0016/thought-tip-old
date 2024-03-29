import userRoutes from "../routes/userRoutes.js";

function routesSetUp(app) {
  app.use("/api/v1/users", userRoutes);
  //TODO: Append article routes also when builded
  //app.use("/api/v1/articles", articleRoutes);
}

export default routesSetUp;
