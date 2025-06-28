import { Socket, Server } from "socket.io";
import { UserService } from "../../../services/user-service";

const userService = UserService.getInstance();

export function setupSocketChat(socket: Socket, io: Server) {
    
    socket.on('chat-history', async (data: any) => {
        try {
            const response = await userService.getAllUsers({});
            socket.emit('chat-history-response', response);
        } catch (error) {
            socket.send('Not able to fetch data');
        }
    })
    
    socket.on('disconnect', () => {
        console.log('User is disconnected', socket.id);
    })
}