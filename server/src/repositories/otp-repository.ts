import { OtpAttributes } from "../types/otp-types";
import Otp from "../models/otp-model";
import { CreateOtpDto } from "../dtos/otp-dto";

export class OtpRepository{
    private static instance: OtpRepository
    
    private constructor() {}
    
    static getInstance = (): OtpRepository => {
        if(!this.instance){
            this.instance = new OtpRepository();
        }

        return this.instance;
    }

    create = async (otpData: CreateOtpDto) => {
        try {
            const existingOtp = await Otp.findOne({email: otpData.email});
            
            if(existingOtp){
                await Otp.deleteMany({email: existingOtp.email});
            }
            
            const newOtp = await Otp.create(otpData);
            return newOtp;
        } catch (error) {
            // console.log("Error(Otp-Repository): Failed to create OTP", error)
            throw new Error('Failed to create OTP');
        }
    }

    findByEmail = async (email: string) => {
        try {
            const otpByMail = await Otp.findOne({email});
            return otpByMail;
        } catch (error) {
            console.log("Error(Otp-Repository): Failed to get OTP", error)
            throw new Error('Failed to get OTP');
        }
    }
}