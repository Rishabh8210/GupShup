import express, { NextFunction, Request, Response, urlencoded} from 'express'
import { PORT } from './configs/server-config';
import ApiRoutes from './routes'
import { setupDatabase } from './configs/db-config';
import { GlobalErrorHandler } from './middlewares/global-error-handler';
import cors from 'cors'
import http from 'http'
import { Server as SocketServer } from 'socket.io';
import { setupSocketChat } from './routes/v1/chat/socket';


const app = express()
const server = http.createServer(app)

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors())

const io = new SocketServer(server, {
    cors: {
        origin: '*'
    }
})

io.on('connection', (socket) => {
    console.log("User is conneceted", socket.id);
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