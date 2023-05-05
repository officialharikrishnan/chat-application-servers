import { GetChat } from "../../framework/types/chat";
import { ChatInterface } from "../repository/chatInterface";


export const getChatUse =async (data:GetChat,repository:ReturnType<ChatInterface>) => {
    return repository.getChat(data).then((chat)=>{
        return chat
    })
    .catch((err)=>{
        return err
    })
}