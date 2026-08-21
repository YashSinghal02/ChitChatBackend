import mongoose from "mongoose"
import { ENV } from "./env.js"

export const dbconnect = async () => {
  try {
    await mongoose.connect(ENV.DB_URL)
    console.log("Database Connected Successfully")
    console.log("Database Name:", mongoose.connection.name)
  } catch (error) {
    console.log(error.message)
  }
}