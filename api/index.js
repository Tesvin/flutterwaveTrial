import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import paymentRouter from './route/payment.route.js'

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors())

const port = 3001;


app.listen(port, () => {
    console.log(`server connected to port 3001`)
})

app.use('/api/', paymentRouter)