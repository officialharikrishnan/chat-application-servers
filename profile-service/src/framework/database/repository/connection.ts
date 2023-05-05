import mongoose from "mongoose";

export const connectDb =async () => {
    const dbName="chatApp"
    await mongoose.connect(`mongodb://localhost:27017/${dbName}`)
    console.log("Db connected");
    
}