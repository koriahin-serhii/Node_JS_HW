import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function connectToDataBase() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

export default connectToDataBase;
