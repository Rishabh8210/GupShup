import { Router, Request, Response } from "express";

const router = Router()

router.get('/', (req:Request, res:Response) => {
    res.json({message:"User Sign-in successfully"});
})

export default router;