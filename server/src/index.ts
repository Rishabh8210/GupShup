import express, { NextFunction, Request, Response} from 'express'
import { PORT } from './config/server-config';

const app = express()


app.get('/hello', (req:Request, res:Response) => {
    res.json({message: "Hello World !"});
})

app.listen(PORT, () => {
    console.log(`Server is Running at PORT:${PORT}`);
})