import express from "express"
import { signup } from "../controllers/auth.controllers.js";



const authRoutes=express.Router();


authRoutes.post("/signup",signup)

authRoutes.get("/login",(req,res)=>{
    res.send("Login endpoint")
})

authRoutes.get("/logout",(req,res)=>{
    res.send("Logout endpoint")
})

export default authRoutes;