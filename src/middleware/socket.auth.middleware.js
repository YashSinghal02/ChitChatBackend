import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { ENV } from "../lib/env.js";
// we extract the JWT
// This socket is User connected to frontend

export const socketAuthMiddleware = async (socket, next) => {
  try {
    // extract token from http-only cookies
    const token = socket.handshake.headers.cookie
      ?.split("; ")
      .find((row) => row.startsWith("jwt="))
      ?.split("=")[1];

    if (!token) {
      console.log("Socket connection rejected: No token provided");
      // new Error() creates the error object,
      //next passes that error to Socket.IO so the connection is rejected
      return next(new Error("Unauthorized - No Token Provided"));
    }

    // verify the token
    const decoded = jwt.verify(token, ENV.JWT_SECRET);
    if (!decoded) {
      console.log("Socket connection rejected: Invalid token");
      return next(new Error("Unauthorized - Invalid Token"));
    }

    // find the user fromdb
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      console.log("Socket connection rejected: User not found");
      return next(new Error("User not found"));
    }
    // we can use this user and user._id in socket
    socket.user = user;
    socket.userId = user._id.toString();

    console.log(
      `Socket authenticated for user: ${user.fullName} (${user._id})`,
    );

    next();
  } catch (error) {
    console.log("Error in socket authentication:", error.message);
    next(new Error("Unauthorized - Authentication failed"));
  }
};
