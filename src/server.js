import express from "express"
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { dbconnect } from "./lib/db.js";
import cors from "cors"
import { ENV } from "./lib/env.js";

const app=express();
dbconnect();

const PORT=ENV.PORT

app.use(cors())
app.use(express.json())
app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)

app.listen(PORT,()=>{
console.log(`Server is runnning on port ${PORT}`)
})