import { config } from 'dotenv'

config();

export const PORT = process.env.PORT; 
export const DB_URL = process.env.DB_URL;
export const SALT = process.env.SALT;
export const MAIL = process.env.MAIL;
export const PASS = process.env.PASS;