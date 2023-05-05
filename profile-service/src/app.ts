import express from "express";
import { configServer, startServer } from "./framework/webserver/server";
import { route } from "./framework/webserver/route/route";
import { connectDb } from "./framework/database/repository/connection";

const app = express()
configServer(app)
startServer(app,8001)
connectDb()
route(app)