import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import connectToDatabase from './src/db/mongoose';
import User from './src/models/user';

dotenv.config();
connectToDatabase();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.get('/', (req, res) =>  {
    res.status(200).json({ msg: "Welcome to Dockerized User Management App" });
});


app.listen(port, () => console.log(`Team Granite App is running on port: ${port}`));