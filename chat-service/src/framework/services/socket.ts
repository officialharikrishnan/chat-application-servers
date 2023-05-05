import { Server } from "socket.io";
import { HttpServer } from "../../app";
import { chatController } from "../../controller/chatController";
import { chatInterface } from "../../application/repository/chatInterface";
import { chatImplemet } from "../database/repository/chatImplementation";
export const chatInit = (httpServer: HttpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });
  interface user{
    userId:string,
    socketId:string
  }

  const controller = chatController(chatInterface,chatImplemet)
  const users:Array<user>=[]
  io.on("connection", (socket) => { 
    console.log("connection established");
    
    // socket.on("join_room",(data)=>{
    //     socket.join(data)
    // }) 
    socket.on("addUser",(userId)=>{
      if(!users.some(user=>user.userId === userId )){
        users.push({userId:userId,socketId:socket.id})
      }else{
        const user = users.find((item)=>{return item.userId === userId})
        if(typeof user !== 'undefined') {user.socketId=socket.id};
      }
      console.log(">>>>",users);
       
    })
    socket.on("send", ({sender,receiver,data}) => {
      console.log("calleddd");
       
      const user = users.find(user => user.userId === receiver)
      user && socket.to(user?.socketId).emit("getMessages",data)
      console.log(receiver,"::",data,"::",user);
      const chatData = {
        user1:sender,user2:receiver,data:{user:sender,time:data.time,message:data.message}
      }
      controller.chatInsert(chatData)
    }); 
  });    
};