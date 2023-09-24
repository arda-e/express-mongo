import dotenv from 'dotenv'
dotenv.config()
import express, { Request, Response } from 'express'
import mongoose from 'mongoose';
import connectDB from './config/dbConn';
import { User } from './routes'


//Connect to DB 
connectDB();

const app = express();
const port = process.env.PORT;

app.use('/user', User)



// Listen to port if DB is connected
mongoose.connection.once('open', () => {
    console.log('Connected to DB');
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}!`);
    });
})



