import { authenticator } from "otplib";

// Setup otplib Config
authenticator.options = {
    step: 300,
    digits: 8
}

// Generate Secret
export function generateSecret(){
    const secret = authenticator.generateSecret();
    return secret;
}

// Generate OTP from Secret
export function generateOtp(secret: string){
    const otp = authenticator.generate(secret);
    return otp;
}

// Verify OTP
export function validateOtp(enteredOtp: string, secret: string) {
    const isValid = authenticator.check(enteredOtp, secret);
    return isValid;
}