import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// const connectDB = async () => {
//     try {
//         const connectionInstance = await mongoose.connect(
//             `${process.env.MONGODB_URI}/${DB_NAME}`
//         );
//         console.log(
//             `\n MongoDB connected: ${connectionInstance.connection.host} \n`
//         );
//     } catch (error) {
//         console.log("MongoDB connection error: ", error);
//         process.exit(1);
//     }
// };

// export default connectDB;

const connectDB = async () => {
    try {
        const connectionString = `${process.env.MONGODB_URI}/${DB_NAME}`;
        console.log("Connecting to:", connectionString); // Add this line for debugging

        const connectionInstance = await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(
            `\n MongoDB connected: ${connectionInstance.connection.host} \n`
        );
    } catch (error) {
        console.log("MongoDB connection error: ", error);
        process.exit(1);
    }
};

export default connectDB;
