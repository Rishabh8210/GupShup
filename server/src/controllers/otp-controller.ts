import { otpInput, validOtpInput } from "../schemas/auth/otp-schema";
import { OtpService } from "../services/Otp-service";
import { Request, Response } from "express";

export class OtpController {
    private static instance: OtpController;
    private otpService: OtpService
    
    private constructor() {
        this.otpService = OtpService.getInstance();
    }

    static getInstance = (): OtpController => {
        if(!this.instance){
            this.instance = new OtpController();
        }

        return this.instance;
    }

    sendOtp = async(req: Request<{}, {}, otpInput>, res: Response) => {
        const { email, email_type } = req.body;
        try{
            const otp = await this.otpService.sendOtp(email, email_type);
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
            const isVerified = await this.otpService.verifyOtp(email, entered_otp);
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