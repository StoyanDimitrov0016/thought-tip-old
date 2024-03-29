import mongoose from "mongoose";
import "dotenv/config.js";

async function connectToMongoDB() {
  try {
    const mongooseConnection = await mongoose.connect(
      process.env.MONGO_DB_CONNECTION_STRING
    );

    console.log(
      `Mongo DB successfully connected: ${mongooseConnection.connection.host}`
    );
  } catch (error) {
    console.error(`Error while connecting to MongoDB: ${error}`);
    process.exit(1);
  }
}

export default connectToMongoDB;
