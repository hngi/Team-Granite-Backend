import mongoose from 'mongoose';
import env from 'dotenv';

env.config();

const connectToDatabase = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/Team-Granite-Dockerized-Users-Management-App-db', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    });

    console.log('Database connected successfully');

    mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
};

//,
//process.env.ATLAS_URI
export default connectToDatabase;