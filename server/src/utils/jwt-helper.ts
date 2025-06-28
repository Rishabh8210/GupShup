import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../configs/server-config'
import { Socket } from 'socket.io';

export function verifyToken(token: string){
    if(!JWT_SECRET){
        throw new Error("JWT Secret not found");
    }

    try {
        const payload = jwt.verify(token, JWT_SECRET);
        console.log("Token Payload: ", payload);
        return payload;
    } catch (error) {
        throw error
    }
}

export function extractToken(socket: Socket){
    const authHeader = socket.handshake.headers.authorization;
    if(authHeader){
        const [type, token] = authHeader.split(' ');
        if(type === 'Bearer'){
            return token;
        }
    }

    if(socket.handshake.auth?.token){
        return socket.handshake.auth?.token;
    }

    return undefined;
}