/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose, { ConnectOptions } from "mongoose";
import colors from "colors";

colors.enable();

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI || "";
        const conn = await mongoose.connect(mongoURI, {
    } as ConnectOptions);
            console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
        } catch (error: any) {
            console.error(`Error: ${error.message}`.red.underline.bold);
            process.exit(1);
        }
    }

export default connectDB;