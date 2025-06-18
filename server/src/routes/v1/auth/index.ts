import { Router } from "express";
import { otpRequestValidator, signupAuthValidator, validateOTPRequest } from "../../../middlewares/auth-request-validator";
import AuthController from "../../../controllers/auth-controller";

const router = Router()
const authController = new AuthController()

// Auth Routes
router.post('/sign-up', signupAuthValidator, authController.signup)

// OTP Routes
router.post('/send-otp', otpRequestValidator, authController.sendOtp)
router.get('/verify-otp', validateOTPRequest, authController.verifyOTP);

export default router;