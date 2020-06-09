const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Team-Granite-Dockerized-Users-Management-App-db', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        }); 

        console.log('MongoDB Connected...');

    } catch (err) {

        // console.error(err.message);
        // process.exit(1);

    }
};

module.exports = connectDB;