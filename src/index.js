import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { app } from './app.js';

dotenv.config(); // load from .env in project root

const PORT = process.env.PORT || 8000;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running at port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('MONGODB connection failed !!!', error);
        process.exit(1);
    });


























/*
import express from 'express';
const app = express();

(async () => {
    try {
         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
         app.on('error', (error) => {
            console.error('Error connecting to the database', error);
            throw error;
         });

         app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
         });

    } catch (error) {
        console.error('Error connecting to the database', error);
        throw error;
    }
})();

*/