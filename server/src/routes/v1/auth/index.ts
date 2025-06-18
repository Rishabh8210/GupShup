import { Router } from "express";
import { signupAuthValidator } from "../../../middlewares/auth-request-validator";
import AuthController from "../../../controllers/auth-controller";

const router = Router()
const authController = new AuthController()

router.post('/sign-up', signupAuthValidator, authController.signup)

export default router;