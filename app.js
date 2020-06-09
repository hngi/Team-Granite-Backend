const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const createError = require('http-errors');
const logger = require('morgan');
const connectToDatabase  = require('./src/db/mongoose');

dotenv.config();
connectToDatabase();

const routes = require('./src/routes/index');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(logger('dev'));

// Adding our routes
app.use('/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404, 'Oops! Seems you enterd a wrong url.'));
  });
  
  // error handler; next is necessary here
  app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

app.listen(port, () => console.log(`Team Granite App is running on port: ${port}`));