import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('MONGODB_URI not defined in environment');
    }
    // Debug: show a masked preview of the URI so we can confirm env is loaded
    try {
      const preview = uri.length > 40 ? uri.slice(0, 40) + '...' : uri;
      console.log('Attempting MongoDB connection using MONGODB_URI:', preview);
    } catch (e) {
      // ignore logging errors
    }
    const connectionInstance = await mongoose.connect(`${uri}/${DB_NAME}`);
    console.log(`MongoDB connected! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Error connecting to the database", error);
        throw error;
    }
}

export default connectDB;