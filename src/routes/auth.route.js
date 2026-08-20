import express from "express"

const authRoutes=express.Router();


authRoutes.get("/signup",(req,res)=>{
    res.send("Signup endpoint")
})

authRoutes.get("/login",(req,res)=>{
    res.send("Login endpoint")
})

authRoutes.get("/logout",(req,res)=>{
    res.send("Logout endpoint")
})

export default authRoutes;