import express from "express";
import aiRoutes from "./routes/ai.routes.js"
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.use('/ai', aiRoutes);

export default app;