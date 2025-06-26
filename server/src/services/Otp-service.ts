import { CreateOtpDto } from "../dtos/otp-dto";
import { OtpRepository } from "../repositories/otp-repository";
import { generateOtp, generateSecret, validateOtp } from "../utils/otp-helper";
import { sendMail } from "./mail-service";

export class OtpService {
    private otpRepository: OtpRepository;
    private static instance: OtpService

    private constructor() {
        this.otpRepository = OtpRepository.getInstance();
    }

    static getInstance = (): OtpService => {
        if(!this.instance){
            this.instance = new OtpService();
        }

        return this.instance;
    }

    createOtp = async(otpData: CreateOtpDto) => {
        try {
            const otp = await this.otpRepository.create(otpData);
            return otp;
        } catch (error) {
            console.log("Error(OTP Service): Failed to generate OTP");
            throw error;
        }
    }

    getOtpByEmail = async(email: string) => {
        try {
            const otp = await this.otpRepository.findByEmail(email);

            if(!otp){
                throw new Error("No otp records found with this email");
            }

            return otp;
        } catch (error) {
            console.log("Error(OTP Service): Failed to find OTP by email");
            throw error;
        }
    }

    sendOtp = async (email: string, email_type: string) => {
        try {
            const secret = generateSecret();
            const otp = generateOtp(secret);

            const otpData: CreateOtpDto = {
                otp,
                email,
                secret
            }

            const saveOtp = await this.otpRepository.create(otpData);

            // send mail
            const mailStatus = await sendMail(email, otp);
            return "OTP verification mail sent successfully"

        } catch (error) {
            console.log("Error(OTP-Service): Failed to generate and send otp");
            throw error
        }
    }

    verifyOtp = async (email: string, entered_otp: string) => {
        try {
            const existingOtp = await this.otpRepository.findByEmail(email);

            if(!existingOtp){
                throw new Error("No otp found with this email");
            }

            if(existingOtp.otp !== entered_otp){
                return false;
            }

            const isVerified = validateOtp(entered_otp, existingOtp.secret);
            return isVerified;
        } catch (error) {
            console.log("Error(OTP-Service): Failed to verify otp");
            throw error
        }
    }
}