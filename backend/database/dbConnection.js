import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./config/config.env" });

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "Mern_hospital",
    });
    console.log("Connected to database!");
  } catch (err) {
    console.error(`Database connection error: ${err.message}`);
    process.exit(1); // Exit process with failure
  }
};
