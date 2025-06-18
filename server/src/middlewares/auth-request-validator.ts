import { NextFunction, Request, Response } from "express";
import { signupUserSchema } from "../schemas/auth/signup-schema";

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
            message: "Validation Failed",
            error: error,
        })
    }
}
