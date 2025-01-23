import 'dotenv/config';
import { readFile } from 'fs/promises';
import mongoose from 'mongoose';
import { Tour } from '../../models/tourModel.js';

const DB_URL = process.env.DB_URL.replace(
  '<DB_PASSWORD>',
  process.env.DB_PASSWORD,
);

await mongoose.connect(DB_URL);

const tours = JSON.parse(
  await readFile(`${import.meta.dirname}/tours-simple.json`, 'utf-8'),
);

async function importData() {
  try {
    await Tour.create(tours);
  } catch (err) {
    console.error(err);
  }
  process.exit();
}

async function deleteData() {
  try {
    await Tour.deleteMany();
  } catch (err) {
    console.error(err);
  }
  process.exit();
}

if (process.argv[2] === '--import') importData();
if (process.argv[2] === '--delete') deleteData();
