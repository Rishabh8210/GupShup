import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../configs/server-config'

export function verifyToken(token: string){
    if(!JWT_SECRET){
        throw new Error("JWT Secret not found");
    }

    try {
        const payload = jwt.verify(token, JWT_SECRET);
    
        console.log("Token Payload: ", payload);
        return { success: true, payload };
    } catch (error) {
        throw error
    }
}