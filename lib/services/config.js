import process from 'process';
import dotenv from 'dotenv';
dotenv.config();

export const APP_ENV = process.env?.APP_ENV ?? 'dev';
export const SERVER_PORT = Number(process.env.APP_PORT ?? 8080);
export const SECRET_KEY = process.env.SECRET_KEY ?? 'rental';

// Database
export const DB_CONNECTSTRING = process.env.DB_CONNECTSTRING;
export const DB_PORT = Number(process.env.DATABASE_PORT);
export const DB_NAME = process.env.DATABASE_NAME;
export const DB_USERNAME = process.env.DATABASE_USERNAME;
export const DB_PASSWORD = process.env.DATABASE_PASSWORD;


// BaseUrl for route
export const rentalBaseURL = process.env.rentalBaseURL ?? '/api/rental';

