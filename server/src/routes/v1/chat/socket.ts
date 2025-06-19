import { Socket, Server } from "socket.io";

export function setupSocketChat(socket: Socket, io: Server) {
    socket.on('disconnect', () => {
        console.log('User is disconnected', socket.id);
    })
}