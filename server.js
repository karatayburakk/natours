import 'dotenv/config';
import mongoose from 'mongoose';
import { app } from './app.js';

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1); // Exit to avoid undefined application state
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1); // Exit to avoid undefined application state
});

const DB_URL = process.env.DB_URL.replace(
  '<DB_PASSWORD>',
  process.env.DB_PASSWORD,
);

await mongoose.connect(DB_URL);

console.log('DB connected successfully');

const port = 3000;
const server = app.listen(port, 'localhost', () => {
  console.log(`App running on port: ${port}`);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1); // Exit to avoid undefined application state
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1); // Exit to avoid undefined application state
});
