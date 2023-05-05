import { Application } from "express";
import { userController } from "../../../controller/userController";
import { userInterface } from "../../../application/repository/userInt";
import { userImplements } from "../../database/repository/userImplement/userImplement";


export const route = (app:Application)=>{
const controller = userController(userInterface,userImplements)
app.route('/register').post(controller.userSignup)
app.route('/get-profile/:id').get(controller.getUser)
app.route('/login').post(controller.userLogin)
app.route('/get-user-by-phone').post(controller.getUserByPhone)
app.route('/get-all-users/:id').get(controller.getAllUsers)
// app.route().post('/login')


}