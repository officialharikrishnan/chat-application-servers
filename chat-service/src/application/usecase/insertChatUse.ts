import { ChatData } from "../../framework/types/chat";
import { ChatInterface } from "../repository/chatInterface";


export const insertChatUse =async (data:ChatData,repository:ReturnType<ChatInterface>) => {
    return repository.insertToChat(data)
}
