import { sendWelcomeEmail } from "../emails/emailHandlers.js";
import { ENV } from "../lib/env.js";
import { genrateTokens } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";


export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fileds are required" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid Email Format" });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      const savedUser=await newUser.save();
      genrateTokens(savedUser._id, res);
      

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });

      // send a welcome email to user

      try {
        await sendWelcomeEmail(savedUser.email,savedUser.fullName,ENV.CLIENT_URL)
      } catch (error) {
        console.error(("Falied to send welcome that email:",error))
      }

    } else {
      res.status(400).json({ message: "Invalid User Data" });
    }
  } catch (error) {
    console.log("Error in Signup Controller:",error);
    res.status(500).json({message:"Internal Server Error"})
  }
};

// Part 1
// 1.When a user signs up, the client sends a signup request to the server. The server validates the request, checks whether the email already exists, and hashes the password. If all validations pass, it creates a new user and saves the user in MongoDB. After creating the user, we generate a JWT token containing the user's ID and send that JWT to the client in an HTTP-only cookie. The HTTP-only cookie prevents JavaScript from accessing the cookie, which helps protect against XSS-based token theft. The cookie is then used to authenticate the user on future requests.