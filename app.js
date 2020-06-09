const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const router =  require('./src/routes/routes');
const openApiDocumentation = require('./src/openApiDocumentation')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const { catchErrors } = require('./src/handlers/errorHandlers');
const userController = require('./src/controller/userController');

const app = express();
const port = process.env.PORT || 5000;

import connectToDatabase  from'./src/db/mongoose';

dotenv.config();
connectToDatabase();
const routes = require('./src/routes/index');


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocumentation));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.use('/', router);

// app.delete('/user/:id', catchErrors(userController.removeUser));

app.listen(port, () => console.log(`Team Granite App is running on port: ${port}`));