import express from "express"
import dotenv from "dotenv"
dotenv.config();
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { dbconnect } from "./lib/db.js";
import cors from "cors"

const app=express();
dbconnect();

const PORT=process.env.PORT

app.use(cors())
app.use(express.json())
app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)

app.listen(PORT,()=>{
console.log(`Server is runnning on port ${PORT}`)
})