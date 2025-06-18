import { OtpAttributes } from "../types/otp-types";
import Otp from "../models/otp-model";

export class OTPRepository{
    createOTP = async (otdData: OtpAttributes) => {
        try {
            const existingOtp = await Otp.findOne({email: otdData.email});
            console.log(existingOtp);
            if(existingOtp){
                await Otp.deleteMany({email: existingOtp.email});
            }
            const otp = await Otp.create(otdData);
            return otp;
        } catch (error) {
            console.log("Error(Otp-Repository): Failed to create OTP", error)
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