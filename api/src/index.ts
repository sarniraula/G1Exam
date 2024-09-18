console.log('Hello world!')
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route';

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use('/api/auth', authRoutes);

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