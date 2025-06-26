import { SignupUserInput } from "../schemas/auth/signup-schema";
import { Request, Response } from "express";
import AuthService from "../services/auth-service";
import { otpInput, validOtpInput } from "../schemas/auth/otp-schema";
import { CreateUserDto } from "../dtos/user-dto";
import { OtpService } from "../services/Otp-service";

class AuthController {
    private authService: AuthService;
    private otpService: OtpService;

    private static instance: AuthController;

    private constructor(){
        this.authService = AuthService.getInstance();
        this.otpService = OtpService.getInstance();
    }

    static getInstance = (): AuthController => {
        if(!this.instance){
            this.instance = new AuthController();
        }

        return this.instance;
    }

    signup = async (req: Request<{}, {}, CreateUserDto>, res: Response) => {
        try {
            const user = await this.authService.signup(req.body);
            res.status(201).json({
                data: user,
                success: true,
                message: 'User sign-up successfully',
                error: null
            })
        } catch (error: any) {
            console.log("Error(Auth-Controller): Failed to signup", error);
            res.status(500).json({message:error.message, error: error})
        }
    }
}

export default AuthController;