import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import connectToDatabase from './src/db/mongoose';
import User from './src/models/user';
import swaggerOptions from "./swagger";
const openApiDocumentation = require('./src/openApiDocumentation')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();
connectToDatabase();


const routes = require('./src/routes/index');

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocumentation));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

// Adding our routes
app.use('/', routes);

app.listen(port, () => console.log(`Team Granite App is running on port: ${port}`));