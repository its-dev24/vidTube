import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const coninstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(`\nMongoDB connected ${coninstance.connection.db}`);
  } catch (er) {
    console.log("Error connecting to mongo DB : ", err);
    process.exit(1);
  }
};

export default connectDB;
