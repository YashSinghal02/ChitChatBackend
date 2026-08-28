import express from "express"
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { dbconnect } from "./lib/db.js";
import cors from "cors"
import { ENV } from "./lib/env.js";
import cookieParser from "cookie-parser";
import { app, server } from "./lib/socket.js";


// const app=express();
dbconnect();

const PORT=ENV.PORT

app.use(cors({
    origin:ENV.CLIENT_URL,
    credentials:true
}))
app.use(express.json({limit:"5mb"}))
app.use(cookieParser())
// Default GET route
app.get("/", (req, res) => {
    res.send("Server is Running")
})
app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)

server.listen(PORT,()=>{
console.log(`Server is runnning on port ${PORT}`)
})