import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import { ENV } from '../lib/env.js';


export const protectRoute=async (req,res,next) => {
   try {
    const token=req.cookies.jwt
    // Token does not exist
    if (!token) {
        return res.status(401).json({message:"Unauthorized no Token Provided"})
    }
    // Token  exist deocode that token 
    const decoded=jwt.verify(token,ENV.JWT_SECRET)
    if (!decoded) {
        return res.status(401).json({message:"Unauthorized Invalid Token"})
    }
    // token valid by using the userID
    // Don't include the password field when retrieving the user.
    const user=await User.findById(decoded.userId).select("-password");
    if(!user){
        return res.status(401).json({message:"User Not Found"})
    }
    // we can this user in next function
    req.user=user;
    // if all ok then call the next function
    next()
   } catch (error) {
    console.log("Error in protectRoute Middleare:",error)
    res.status(500).json({ message: "Internal Server Error" });
   } 
}


// Basically, user sends an updated request in the server. Before request reach to server it go to the protected route, where it check whether the user token exist or not if not then show 401 Unauthorized
// If the token exists, jwt.verify() verifies and decodes the token.
// If the token is invalid or expired → 401 Unauthorized.
// From the decoded token, we get the userId.
// We use that userId to find the user in MongoDB:
// .select("-password") means we don't retrieve the password.
// If the user doesn't exist → 401 User Not found.
// If everything is valid, we can this user in next function
// If all ok then call the next function