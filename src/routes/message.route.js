import express from "express"

const messageRoutes=express.Router();


messageRoutes.get("/send",(req,res)=>{
    res.send("Send Message endpoint")
})

messageRoutes.get("/login",(req,res)=>{
    res.send("Login endpoint")
})

messageRoutes.get("/logout",(req,res)=>{
    res.send("Logout endpoint")
})

export default messageRoutes;