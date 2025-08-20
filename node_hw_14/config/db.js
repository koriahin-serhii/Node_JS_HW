import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const URL = process.env.MONGODB_URI;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(URL);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
  }
};

export default connectToDatabase;
