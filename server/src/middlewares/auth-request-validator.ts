import { NextFunction, Request, Response } from "express";
import { signupUserSchema } from "../schemas/auth/signup-schema";
import { otpSchema } from "../schemas/auth/otp-schema";

export const signupAuthValidator = (req: Request, res: Response, next: NextFunction) => {
    try {
        signupUserSchema.parse({
            body: req.body
        })

        next();
    } catch (error) {
        res.status(400).json({
            data: null,
            success: false,
            message: "Sign-up Validation Failed",
            error: error,
        })
    }
}


export const otpRequestValidator = (req: Request, res: Response, next: NextFunction) => {
    try {
        otpSchema.parse({
            body: req.body
        })

        next();
    } catch (error) {
        res.status(400).json({
            data: null,
            success: false,
            message: "Opt Validation Failed",
            error: error,
        })
    }
}