import { User } from "../models";
import { UserAttributes } from "../types/user-types";

export class UserRepository {
    createUser = async (userData: UserAttributes) => {
        try {
            const user = await User.create(userData);
            return user;
        } catch (error) {
            console.log("Error(User Repository): Failed to create user", error);
            throw new Error('Failed to create user');
        }
    }
}