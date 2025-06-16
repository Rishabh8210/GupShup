import { DB_URL } from "./server-config";
import mongoose from "mongoose";

export async function setupDatabase(){
    try {
        if(!DB_URL){
            throw new Error('DB Url is not defined')
        }
    
        await mongoose.connect(DB_URL)
        
        console.log("MongoDB connected successfully")
    } catch (error) {
        console.log("MongoDB Failed to connect: ");
        throw error
    }
}
