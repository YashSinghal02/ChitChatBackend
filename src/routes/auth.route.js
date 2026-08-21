import express from "express"
import { signup,login,logout,updateProfile } from "../controllers/auth.controllers.js";
import { protectRoute } from "../middleware/auth.middleware.js";



const authRoutes=express.Router();


authRoutes.post("/signup",signup)

authRoutes.post("/login",login)

authRoutes.post("/logout",logout)

// protectRoute: If user is authenticated then only it go to next function
authRoutes.put("/update-profile",protectRoute,updateProfile)

// User is logged in or not 
authRoutes.get("/check",protectRoute,(req,res)=> res.status(200).json(req.user))

export default authRoutes;