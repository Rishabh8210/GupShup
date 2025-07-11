import express, { NextFunction, Request, Response, urlencoded} from 'express'
import { JWT_SECRET, PORT } from './configs/server-config';
import ApiRoutes from './routes'
import { setupDatabase } from './configs/db-config';
import { GlobalErrorHandler } from './middlewares/global-error-handler';
import cors from 'cors'
import http from 'http'
import { Server as SocketServer } from 'socket.io';
import { setupSocketChat } from './routes/v1/chat/socket';
import { extractToken, verifyToken } from './utils/jwt-helper';


const app = express()
const server = http.createServer(app)

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

const io = new SocketServer(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
        credentials: true
    }
})

io.on('connection', (socket) => {
    console.log("User is conneceted", socket.id);

    io.use((socket, next) => {
        const token = extractToken(socket);
        
        if(!token){
            return next(new Error('Authentication token is missing'))
        }

        try {
            const decoded = verifyToken(token);
            socket.data = decoded;
            next();
        } catch (error) {
            return next(new Error("Invalid token or token is expired"))
        }
    })

    setupSocketChat(socket, io);
})


// MongoDB Setup
setupDatabase();
app.use('/api', ApiRoutes);

app.use((req, res, next) => {
    const error = new Error(`Route ${req.originalUrl} not found`);
    // error.statusCode = 404;
    next(error);
});

// global error handler
app.use(GlobalErrorHandler)

server.listen(PORT, () => {
    console.log(`Server is Running at PORT:${PORT}`);
})