import { CreateUserDto, FilterUserDto } from "../dtos/user-dto";
import { User } from "../models";

export class UserRepository {

    private static instance: UserRepository;

    private constructor() {}

    static getInstance = (): UserRepository => {
        if(!this.instance){
            this.instance = new UserRepository();
        }

        return this.instance;
    }

    createUser = async (userData: CreateUserDto) => {
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

    get = async (filter: FilterUserDto) => {
        try {
            const user = await User.findOne(filter);
            return user;
        } catch (error) {
            console.log("Error(User Repository): Failed to get user", error);
            throw new Error("Failed to get user");
        }
    }

    getById = async (id: string) => {
        try {
            const user = await User.findById(id);
            return user;
        } catch (error) {
            console.log("Error(User Repository): Failed to get user by id", error);
            throw new Error("Failed to get user by id");
        }
    }

    getAll = async(filter: FilterUserDto) => {
        try {
            const allUsers = await User.find(filter);
            return allUsers
        } catch (error) {
            console.log("Error: ", error);
            throw new Error("Internal server error");
        }
    }
}