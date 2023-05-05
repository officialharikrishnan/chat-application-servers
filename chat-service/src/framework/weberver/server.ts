import express, { Application } from 'express'
import {createServer} from 'http'
import cors from 'cors'
export const configServer = (app:Application) => {
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
}
export const startServer = (app:Application,PORT:number) => {
    const httpServer= createServer(app)
    httpServer.listen(PORT,()=>{
        console.log("chat server started on",PORT)
    })
    return httpServer
}