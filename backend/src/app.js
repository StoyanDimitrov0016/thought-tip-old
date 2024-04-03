import express from "express";
import expressSetUp from "./configuration/express.js";
import connectToMongoDB from "./configuration/database.js";
import routesSetUp from "./configuration/routes.js";

const PORT = process.env.PORT || 7000;
const app = express();

async function startServer() {
  try {
    await connectToMongoDB();
    console.log("Connected to MongoDB successfully.");

    expressSetUp(app);
    console.log("Express middleware set up successfully.");

    routesSetUp(app);
    console.log("Routes appended successfully.");

    app.listen(PORT, () => {
      console.log(`Server is listening on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Failed server initializing:", error);
    process.exit(1);
  }
}

startServer();
