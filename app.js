const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const router =  require('./src/routes/routes');

import connectToDatabase  from'./src/db/mongoose';

dotenv.config();
connectToDatabase();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use( router);

app.listen(port, () => console.log(`Team Granite App is running on port: ${port}`));