import { model,Schema } from "mongoose";

const userSchema = new Schema({
    name:String,
    phone:String
},{versionKey:false})



export const User = model('user',userSchema)
export type userType = typeof User