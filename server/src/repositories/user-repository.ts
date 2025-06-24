import { User } from "../models";
import { UserAttributes } from "../types/user-types";
import { MongooseError } from "mongoose";

export class UserRepository {
    createUser = async (userData: UserAttributes) => {
        try {
            const user = await User.create(userData);
            return user;
        } catch (error:any) {
            if(error.cause.code === 11000){
                throw new Error('A user with this email already exists. Please sign in or use a different email to register.')
            }
            
            console.log("Error(User Repository): Failed to create user", error);
            throw new Error('Failed to create user');
        }
    }
}