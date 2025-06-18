import { OTPRepository } from "../repositories/otp-repository";
import { UserRepository } from "../repositories/user-repository";
import { OtpAttributes } from "../types/otp-types";
import { UserAttributes } from "../types/user-types";
import { generateOtp, generateSecret, verifyOtp } from "../utils/otp-helper";
import { sendMail } from "./mail-service";

class AuthService {
    private userRepository: UserRepository;
    private otpRepository: OTPRepository
    
    constructor(){
        this.userRepository = new UserRepository();
        this.otpRepository = new OTPRepository();
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

    sendOTP = async (email: string, email_type: string) => {
        try {
            const secret = generateSecret();
            const otp = generateOtp(secret);

            const otpData: OtpAttributes = {
                otp,
                email,
                secret
            }

            const saveOtp = await this.otpRepository.createOTP(otpData);

            // send mail
            const mailStatus = await sendMail(email, otp);
            return "OTP verification mail sent successfully"

        } catch (error) {
            console.log("Error(OTP-Service): Failed to generate and send otp");
            throw error
        }
    }

    verifyOTP = async (email: string, entered_otp: string) => {
        try {
            const existingOtp = await this.otpRepository.findByEmail(email);
            if(!existingOtp){
                throw new Error("OTP not found")
            }

            if(existingOtp.otp !== entered_otp){
                return false;
            }

            const isVerified = verifyOtp(entered_otp, existingOtp.secret);
            return isVerified;
        } catch (error) {
            console.log("Error(OTP-Service): Failed to verify otp");
            throw error
        }
    }
}

export default AuthService
