import { JwtPayload } from "jsonwebtoken";
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from "../configs/server-config";
import { CreateUserDto } from "../dtos/user-dto";
import { UserService } from "./user-service";
import { OtpService } from "./Otp-service";

class AuthService {
    private userService: UserService;
    private otpService: OtpService
    private static instance: AuthService

    private constructor(){
        this.userService = UserService.getInstance();
        this.otpService = OtpService.getInstance();
    }

    static getInstance = () => {
        if(!this.instance){
            this.instance = new AuthService();
        }

        return this.instance;
    }
    
    private createToken = (payload: JwtPayload) => {
        
        if(!JWT_SECRET){
            throw new Error('JWT Secret not found')
        }
        
        try {
            const token = jwt.sign(payload, JWT_SECRET, { expiresIn: 3600000})
            return token;
        } catch (error) {
            throw error
        }
    }
    
    signup = async (userData: CreateUserDto) => {
        try {
            const user = await this.userService.createUser(userData);
            
            const payload = {
                id: user.id,
                name: user.name,
                email: user.email
            }
            
            const token = this.createToken(payload);

            return {token, user};
        } catch (error) {
            // console.log("Error(User-Service): Failed to create user", error);
            throw error;
        }
    }    
}

export default AuthService
