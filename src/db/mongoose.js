<<<<<<< HEAD
// import mongoose from 'mongoose';
const mongoose = require('mongoose');
=======
import mongoose from 'mongoose';
import env from 'dotenv';

env.config();

>>>>>>> dedd6338abfa4e123ef1fa2ca6203c1b4b9fbe3a
const connectToDatabase = () => {
    mongoose.connect(process.env.ATLAS_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    });

    console.log('Database connected successfully');

    mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
};

<<<<<<< HEAD
// mongodb://127.0.0.1:27017/Team-Granite-Dockerized-Users-Management-App-db',
=======
// mongodb://127.0.0.1:27017/Team-Granite-Dockerized-Users-Management-App-db,
>>>>>>> dedd6338abfa4e123ef1fa2ca6203c1b4b9fbe3a

export default connectToDatabase;