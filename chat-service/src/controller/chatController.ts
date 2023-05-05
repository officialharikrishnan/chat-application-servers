import { ChatInterface } from "../application/repository/chatInterface";
import { getChatUse } from "../application/usecase/getChatUse";
import { insertChatUse } from "../application/usecase/insertChatUse";
import { ChatImplement } from "../framework/database/repository/chatImplementation";
import { ChatData, GetChat } from "../framework/types/chat";
import { Request,Response } from "express";


export const chatController = (
    chatinterface:ChatInterface,
    chatImplements:ChatImplement
) => {
    const repository = chatinterface(chatImplements())
    const chatInsert = (data:ChatData) => {
        console.log("controller",data);
        
        insertChatUse(data,repository)
    }
    const getChat = (req:Request,res:Response) => {
        console.log("CALLED",req.body)
        const {user1,user2} = req.body
        const data=  {
            user1,user2
        }
        getChatUse(data,repository).then((chat)=>{
            console.log("get chat controller",chat);
            res.send(chat)
        })
        .catch((err)=>{
            res.send(err)
        })
    }
    return {
        chatInsert,
        getChat
    }
}