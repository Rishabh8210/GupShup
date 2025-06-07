import express, { NextFunction, Request, Response, urlencoded} from 'express'
import { PORT } from './config/server-config';
import ApiRoutes from './routes'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use('/api', ApiRoutes);

app.get('/hello', (req:Request, res:Response) => {
    res.json({message: "Hello World !"});
})

app.listen(PORT, () => {
    console.log(`Server is Running at PORT:${PORT}`);
})