import mongoose from 'mongoose';

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

// ',

export default connectToDatabase;