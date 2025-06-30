import { CreateUserDto, FilterUserDto } from "../dtos/user-dto";
import { UserRepository } from "../repositories/user-repository";

export class UserService {
    private userRepository: UserRepository;
    private static instance: UserService;
    
    private constructor(){
        this.userRepository = UserRepository.getInstance();
    }

    static getInstance = (): UserService => {
        if(!this.instance){
            this.instance = new UserService();
        }

        return this.instance;
    }

    createUser = async (userData: CreateUserDto) => {
        try {
            const user = await this.userRepository.createUser(userData);
            return user;
        } catch (error) {
            console.log("Error(UserService): Failed to create user", error);
            throw error;
        }
    }

    getUser = async(filter: FilterUserDto) => {
        try {
            const user = await this.userRepository.get(filter);
            
            if(!user){
                throw new Error("No user found with this filter");
            }

            return user;
        } catch (error) {
            console.log("Error(UserService): Failed to get user", error);
            throw error;
        }
    }

    getAllUsers = async(filter: FilterUserDto) => {
        try {
            const users = await this.userRepository.getAll(filter);
            
            if(!users){
                throw new Error("No user found");
            }

            return users;
        } catch (error) {
            console.log("Error(UserService): Failed to get user", error);
            throw error;
        }
    }

    getUserById = async(id: string) => {
        try {
            if(!id){
                throw new Error("User-Id not found")
            }

            const user = await this.userRepository.getById(id);
            
            if(!user){
                throw new Error("No user found with this id");
            }

            return user;
        } catch (error) {
            console.log("Error(UserService): Failed to get user", error);
            throw error;
        }
    }
}