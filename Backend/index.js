import app from "./app.js";
import mongoose from "mongoose";

import { config } from "dotenv";
config();
export const connectDB = async () => {
  const { connection } = await mongoose.connect("mongodb+srv://Manas:NUAY466mPJY2neH8@cluster0.zojlpsz.mongodb.net/?retryWrites=true&w=majority");
  console.log(`MongoDB connected with ${connection.host}`);
};
connectDB();

app.listen("4000", () => {
  console.log(`Server is working on port: ${process.env.PORT}`);
});