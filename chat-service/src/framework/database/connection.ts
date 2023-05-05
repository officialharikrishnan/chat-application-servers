import mongoose from "mongoose";

const dbName = 'chatData'

export const connectDb = async () => {
    await mongoose.connect(`mongodb://localhost:27017/${dbName}`)
    console.log("db connected");
    
}
