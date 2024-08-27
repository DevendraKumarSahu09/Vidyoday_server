import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionString = `${process.env.MONGODB_URI}/${DB_NAME}`;
        console.log("Connecting to:", connectionString); // Add this line for debugging

        const connectionInstance = await mongoose.connect(connectionString);
        console.log(
            `\n MongoDB connected: ${connectionInstance.connection.host} \n`
        );
    } catch (error) {
        console.log("MongoDB connection error: ", error);
        process.exit(1);
    }
};

export default connectDB;
