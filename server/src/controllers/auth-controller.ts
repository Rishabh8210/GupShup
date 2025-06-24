import { SignupUserInput } from "../schemas/auth/signup-schema";
import { Request, Response } from "express";
import AuthService from "../services/auth-service";
import { otpInput, validOtpInput } from "../schemas/auth/otp-schema";

class AuthController {
    private authService: AuthService
    constructor(){
        this.authService = new AuthService();
    }

    signup = async (req: Request<{}, {}, SignupUserInput>, res: Response) => {
        try {
            const user = await this.authService.signup(req.body);
            res.status(201).json({
                data: user,
                success: true,
                message: 'User sign-up successfully',
                error: null
            })
        } catch (error:any) {
            console.log("Error(Auth-Controller): Failed to signup", error);
            res.status(500).json({message:error.message, error: error})
        }
    }

    sendOtp = async(req: Request<{}, {}, otpInput>, res: Response) => {
        const { email, email_type } = req.body;
        try{
            const otp = await this.authService.sendOTP(email, email_type);
            res.status(200).json({
                data: otp,
                message: 'OTP sent successfully',
                success: true,
                error: null
            })
        } catch(error:any){
            console.log("Error(Auth-Controller): Failed to get OTP", error);    
            res.status(500).json({message:error.message, error: error})
        }
    }

    verifyOTP = async (req: Request<{}, {}, {},validOtpInput>, res: Response) => {
        const { email, entered_otp } = req.query;
        console.log(email, entered_otp);
        try {
            const isVerified = await this.authService.verifyOTP(email, entered_otp);
            if(isVerified){
                res.status(200).json({
                    message: 'OTP verified successfully',
                    success: true,
                    data: isVerified,
                    error: null
                }) 
            } else {
                res.status(400).json({
                    message: 'Invalid or expired OTP',
                    success: false,
                    data: 'Invalid or expired OTP',
                    error: null
                })
            } 
        } catch (error) {
            console.log("Error(Auth-Controller): Failed to get OTP", error);
            res.status(500).json({message:"Internal Server Error", error: error})
        }
    }
}

export default AuthController;