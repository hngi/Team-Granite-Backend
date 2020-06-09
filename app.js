import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import connectToDatabase from './src/db/mongoose';
import User from './src/models/user';

dotenv.config();
connectToDatabase();

const routes = require('./src/routes/index');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

// Adding our routes
app.use('/', routes);

app.listen(port, () => console.log(`Team Granite App is running on port: ${port}`));