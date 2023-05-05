import { ChatImplement } from "../../framework/database/repository/chatImplementation";;
import { ChatData, GetChat } from "../../framework/types/chat";

export const chatInterface = (repository:ReturnType<ChatImplement>) =>{
    const insertToChat =async (datas:ChatData) =>{
        const {user1,user2,data}=datas
        return repository.insertToChat(user1,user2,data)
    }
    const getChat = async (datas:GetChat) => {
        const {user1,user2}= datas
        return repository.getChat(user1,user2).then((chat)=>{
            
            return chat
        })
        .catch((err)=>{
            return err
        })
    }
    return {
        insertToChat,
        getChat
    }
}

export type ChatInterface = typeof chatInterface