import express from "express"
import { getAllContacts,getMessagesByUserId,sendMessage,getChatPartners } from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middlewar.js";


const messageRoutes=express.Router();

// All contacts who have logged in 
messageRoutes.get("/contacts",arcjetProtection,protectRoute,getAllContacts);
// all contacts we have been chating
messageRoutes.get("/chats",arcjetProtection,protectRoute,getChatPartners);
// see all message between user and other user
messageRoutes.get("/:id",arcjetProtection,protectRoute,getMessagesByUserId);
// send message to the user
messageRoutes.post("/send/:id",protectRoute,sendMessage)

export default messageRoutes;