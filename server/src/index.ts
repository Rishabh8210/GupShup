import express, { NextFunction, Request, Response, urlencoded} from 'express'
import { PORT } from './config/server-config';
import ApiRoutes from './routes'
import { setupDatabase } from './config/db-config';

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}));

// MongoDB Setup
setupDatabase();

app.use('/api', ApiRoutes);

app.listen(PORT, () => {
    console.log(`Server is Running at PORT:${PORT}`);
})