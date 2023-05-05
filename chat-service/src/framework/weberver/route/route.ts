import { Application } from "express";
import { chatController } from "../../../controller/chatController";
import { chatInterface } from "../../../application/repository/chatInterface";
import { chatImplemet } from "../../database/repository/chatImplementation";


export const route = (app:Application)=>{
const controller = chatController(chatInterface,chatImplemet)

app.route('/get-chat').post(controller.getChat)

}