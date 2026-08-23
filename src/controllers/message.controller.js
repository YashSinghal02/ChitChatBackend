import cloudinary from "../lib/cloudinary.js";
import Message from "../models/message.model.js";
import User from "../models/user.model.js";


export const getAllContacts=async (req,res) => {
   try {
    const loggedInUserId=req.user._id;
    const filterUsers=await User.find({_id:{$ne:loggedInUserId}}).select("-password");
    res.status(200).json(filterUsers)
   } catch (error) {
    console.log("Error in getAllContacts:",error.message);
    res.status(500).json({message:"Internal Server Error"});
   } 
}

 export const getMessagesByUserId=async (req,res) => {
    try {
        // logged user id
        const myId=req.user._id;
        //  user id from url to who i chat
        const {id:userToChatId}=req.params;
        const messages=await Message.find({
            $or:[
                {senderId:myId,receiverId:userToChatId},
                {senderId:userToChatId,receiverId:myId},
            ]
        });
        res.status(200).json(messages)
        
    } catch (error) {
      console.log("Error in getMessagesByUserId:",error.message);
    res.status(500).json({message:"Internal Server Error"});  
    }
   }

// req.user._id
//       ↓
// "Who am I?"
//       ↓
// Logged-in/current user
//       ↓
// Comes from authentication middleware

// req.params.id
//       ↓
// "Who am I chatting with?"
//       ↓
// The other user's ID
//       ↓
// Comes from the URL

 export const sendMessage=async (req,res) => {
    try {
       const{text,image}=req.body;
       const {id:receiverId}=req.params;
        const senderId=req.user._id;
        let imaegUrl;
        if (image) {
            const uploadResponse = await cloudinary.uploader.upload(profilePic);
            imaegUrl=uploadResponse.secure_url;
        }
        const newMessage=new Message({
            senderId,
            receiverId,
            text,
            image:imaegUrl,
        });
        await newMessage.save();
        // // todo:send message  i real time if user is online  socket.io
        res.status(201).json(newMessage);
        
    } catch (error) {
      console.log("Error in sendMessage controller:",error.message);
    res.status(500).json({message:"Internal Server Error"});  
    }
   }

//    When the logged-in user opens the chat section,  he can See the received messages or send messages   And then I extract that particular partner and I use map because there can be multiple partner if the Sender ID equal to the logged in  user ID Then it take receiver ID otherwise it takes sender ID and then I use set to remove duplicate partner Id and multiple same messages and then I used to fetch those partner Id from the user collection
   export const getChatPartners=async (req,res) => {
    try {
        const loggedInUserId=req.user._id;
        // find all messages where the loggen-in-user can be sender or receiver
        const message=await Message.find({
            $or:[{senderId:loggedInUserId},{receiverId:loggedInUserId}]
        });
        
  const chatPartnerIds = [
      ...new Set(
        message.map((msg) => {
          return msg.senderId.toString() === loggedInUserId.toString()
            ? msg.receiverId.toString()
            : msg.senderId.toString();
        })
      )
    ];

        const chatPartners=await User.find({_id:{$in:chatPartnerIds}}).select("-password")
        res.status(200).json(chatPartners);
        
    } catch (error) {
      console.log("Error in getChatPartners controller:",error.message);
    res.status(500).json({message:"Internal Server Error"});  
    }
   }