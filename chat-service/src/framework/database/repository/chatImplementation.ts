import mongoose from "mongoose";
import { Chat } from "../model/chat";


export const chatImplemet = () => {

    const insertToChat =async (user1:string,user2:string,data:object) => {
        console.log("implement",user1,user2,data);
        
        const singMsg = {...data,msgId:new mongoose.Types.ObjectId}
        const chatData =await Chat.findOne({$and:[{users:user1},{users:user2}]}).catch((err)=>{
            console.log(err);
            
        })
        console.log("chat data :",chatData);
        
        if(chatData){
            console.log("update");
            
            Chat.updateOne({$and:[{users:user1},{users:user2}]},{
                $push:{
                    data:singMsg
                }
            }).catch((err)=>{
                console.log(err);
                
            })
        }else{
            console.log("insert");
            
            Chat.create({users:[user1,user2],data:singMsg})
            
        }
    }
    const getChat = async (user1:string,user2:string) => {
        const chatData = await Chat.findOne({$and:[{users:user1},{users:user2}]})
        console.log("imple",user1,user2);
        
        if(chatData){
            return chatData
        }else{
            return null
        }
    }
        return {
        insertToChat,
        getChat                                               
    }
}
export type ChatImplement = typeof chatImplemet