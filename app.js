const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const helmet = require('helmet');
const router =  require('./src/routes/routes');
const openApiDocumentation = require('./src/swagger/openApiDocumentation')
const swaggerUi = require('swagger-ui-express')

const app = express();
const port = process.env.PORT || 5000;
const connectToDatabase = require('./src/db/mongoose');

dotenv.config();
 connectToDatabase();

 app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use('/v1/', router);
app.use('/', swaggerUi.serve, swaggerUi.setup(openApiDocumentation));





app.listen(port, () => console.log(`Team Granite App is running on port: ${port}`));
