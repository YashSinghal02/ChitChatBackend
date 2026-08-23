import express from "express"
import { signup,login,logout,updateProfile } from "../controllers/auth.controllers.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middlewar.js";



const authRoutes=express.Router();

// authRoutes.get("/test",arcjetProtection,(req,res)=>{
//     res.status(200).json({message:"Test the Rate Limiter"})
// })

authRoutes.post("/signup",arcjetProtection,signup)

authRoutes.post("/login",arcjetProtection,login)

authRoutes.post("/logout",arcjetProtection,logout)

// protectRoute: If user is authenticated then only it go to next function
authRoutes.put("/update-profile",arcjetProtection,protectRoute,updateProfile)

// User is logged in or not 
authRoutes.get("/check",arcjetProtection,protectRoute,(req,res)=> res.status(200).json(req.user))

export default authRoutes;