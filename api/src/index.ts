import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import authRoutes from './routes/auth.route';
import testRoutes from './routes/test.route';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log('MongoDB connected');
  }).catch((error) => {
    console.error('MongoDB connection error:', error);
  });

app.use(express.json());
app.use(cookieParser());


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use('/api/auth', authRoutes);
app.use('/api/test', testRoutes);

//middleware
app.use((err:any, req:any, res:any, next:any) => {
  const statusCode = err.statusCode || 500
  const message  = err.message || 'Internal Server Error.'
  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  })
})