import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const URL = process.env.MONGO_URI;
const DB_NAME = process.env.MONGO_DB_NAME

const client = new MongoClient(URL);

let dbConnection;

async function connectToDatabase() {
  try {
    await client.connect();
    dbConnection = client.db(DB_NAME);
    console.log('Connected successfully to mongoDB');
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
}

function getDB() {
  if (!dbConnection) {
    throw new Error('Database not connected');
  }
  return dbConnection;
}

export { connectToDatabase, getDB };
