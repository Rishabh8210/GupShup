import { Router } from "express";
import { otpRequestValidator, signupAuthValidator, validateOTPRequest } from "../../../middlewares/auth-request-validator";
import AuthController from "../../../controllers/auth-controller";
import { OtpController } from "../../../controllers/otp-controller";

const router = Router()
const authController = AuthController.getInstance();
const otpController = OtpController.getInstance();

// Auth Routes
router.post('/sign-up', signupAuthValidator, authController.signup)

// OTP Routes
router.post('/send-otp', otpRequestValidator, otpController.sendOtp)
router.get('/verify-otp', validateOTPRequest, otpController.verifyOTP);

export default router;