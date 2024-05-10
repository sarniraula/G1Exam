import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import questionRoutes from './routes/questions.js';

dotenv.config();

mongoose
.connect(process.env.MONGO)
.then(() => {
    console.log('MongoDb is connected');
}).catch((err) => {
    console.log(err);
})

const app = express();
app.use(cors())
app.use(express.json());    // Middleware to parse JSON-encoded request bodies
const PORT = process.env.PORT || 3000;

app.use('/api/questions', questionRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
})