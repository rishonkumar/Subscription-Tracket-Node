import mongoose from "mongoose";

import { DB_URI, NODE_ENV } from "../config/env";


if(!DB_URI) {
    throw new Error("DB_URI is not defined in the environment variables.");
}

const connectDB = async () => {

    try{
        await mongoose.connect(DB_URI)

    } catch(error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1); // Exit the process with failure
    }

}

export default connectDB;
