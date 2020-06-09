import mongoose from 'mongoose';

const connectToDatabase = () => {
    mongoose.connect('mongodb://team-granite:granite1@ds047065.mlab.com:47065/team-granite',{
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    });

    console.log('Database connected successfully');

    mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
};

// mongodb://127.0.0.1:27017/Team-Granite-Dockerized-Users-Management-App-db

export default connectToDatabase;