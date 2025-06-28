import { NextFunction, Request, Response } from "express";
import { signupUserSchema } from "../schemas/auth/signup-schema";
import { otpSchema, validOtpSchema } from "../schemas/auth/otp-schema";
import { verifyToken } from "../utils/jwt-helper";
import { TokenPayload } from "../types/jwt-types";
import { JwtPayload } from "jsonwebtoken";


export interface customRequest extends Request {
    headers: {
        authorization?: string,
        user?: JwtPayload,
        [key: string]: any
    }
}

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

export const validateOTPRequest = (req: Request, res: Response, next: NextFunction) => {
    try {
        validOtpSchema.parse(req.query)

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

export const requestHeadersValidator = (req: customRequest, res: Response, next: NextFunction) => {
    if (!req.headers['authorization']) {
        res.status(400).json({
            data: {},
            success: false,
            message: 'No authorization data found',
            error: { message: 'No authorization data found' }
        })
        return;
    }

    const token = req.headers['authorization'].split(' ')[1];
    
    if (!token) {
        res.status(403).json({
            data: {},
            message: 'Token not found',
            success: false,
            error: { message: 'Token not found' }
        })
        return;
    }
    try {
        const tokenPayload = verifyToken(token);
        console.log("Payload: ", tokenPayload);

        if (typeof tokenPayload === 'string') {
            res.status(400).json({
                data: {},
                message: 'Invalid token found',
                success: false,
                error: { message: 'Invalid token found' }
            })
            return;
        }

        req.headers.user = tokenPayload as JwtPayload;
        next();
    } catch (error) {
        console.error("Token validation error:", error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Internal Server Error',
            error: { message: 'Something went wrong during token validation' },
        });
    }
}