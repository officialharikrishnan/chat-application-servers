import {ObjectId, Schema,model} from 'mongoose'

const chatSchema = new Schema({
    users:Array,
    data:Array<{msgId:ObjectId,user:String,time:String,message:String}>
},{versionKey:false})

export const Chat = model('chat',chatSchema)

