import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("DATABASE CONNECTED !!!")
    } catch (error) {
        console.log("Database Connection Failed", error)
        process.exit(1);  // exit with failure
    }
}


export default connectDB;