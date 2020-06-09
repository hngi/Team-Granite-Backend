import mongoose from 'mongoose';

const connectToDatabase = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/Team-Granite-Dockerized-Users-Management-App-db',{
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    });
    mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
};

// mongodb://team-granite:granite1@ds047065.mlab.com:47065/team-granite

export default connectToDatabase;