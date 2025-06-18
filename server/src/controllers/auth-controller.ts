import { SignupUserInput } from "../schemas/auth/signup-schema";
import { Request, Response } from "express";
import AuthService from "../services/auth-service";

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
        } catch (error) {
            console.log("Error(Auth-Controller): Failed to signup", error);
            res.status(500).json({message:"Internal Server Error"})
        }
    }
}

export default AuthController;