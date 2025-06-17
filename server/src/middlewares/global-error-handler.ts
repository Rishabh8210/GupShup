import { NextFunction, Request, Response } from "express";

export const GlobalErrorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    console.log("Global Error: ", error.message);

    res.status(500).json({message: "Internal Server Error"});
}

