import jwt from "jsonwebtoken"
import { ENV } from "./env.js";

// When user click on a button tirggers a request and client send like api/auth/signup or login  
// then create a user in database
// (And also generate JWT token) Then at the same time it also sent back the JWT generated token to the  in cookies
export const genrateTokens =(userId, res)=>{
  if (!ENV.JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured");
  }
const token=jwt.sign({userId},ENV.JWT_SECRET,{
    expiresIn:"7d"
})

// And also generate JWT token (Then at the same time it also sent back the JWT generated token to the  in cookies)
res.cookie("jwt",token,{
    maxAge:7*24*60*60*1000,//milliseconds
    httpOnly:true,//prevent XSS attack: Cross-Site Scripting(this token avaliable only httponly no javascript)
    sameSite:"none",//CSRF Attack
    secure:true,
})

return token
}