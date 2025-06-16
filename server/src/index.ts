import express, { NextFunction, Request, Response, urlencoded} from 'express'
import { PORT } from './config/server-config';
import ApiRoutes from './routes'
import { setupDatabase } from './config/db-config';
import { GlobalErrorHandler } from './middleware/global-error-handler';

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}));

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

app.listen(PORT, () => {
    console.log(`Server is Running at PORT:${PORT}`);
})