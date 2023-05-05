import express, { Application } from 'express'
import { configServer, startServer } from './framework/weberver/server'
import { chatInit } from './framework/services/socket'
import { connectDb } from './framework/database/connection'
import { route } from './framework/weberver/route/route'

const app:Application=express()

configServer(app)
const httpServer =  startServer(app,8000)
route(app)
connectDb()

export const io = chatInit(httpServer)
export type HttpServer = typeof httpServer