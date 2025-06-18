import { UserRepository } from "../repositories/user-repository";
import { UserAttributes } from "../types/user-types";

class AuthService {
    private userRepository: UserRepository;
    
    constructor(){
        this.userRepository = new UserRepository();
    }
    
    signup = async (userData: UserAttributes) => {
        try {
            const user = await this.userRepository.createUser(userData);
            return user;
        } catch (error) {
            console.log("Error(User-Service): Failed to create user", error);
            throw error;
        }
    }
}

export default AuthService
