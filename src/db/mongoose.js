const mongoose = require('mongoose')

const connectToDatabase = () => {
  mongoose.connect(
    'mongodb+srv://sonnie:cross2017@cluster0-bwhpt.gcp.mongodb.net/sdg?retryWrites=true&w=majority',
    //"mongodb://team-granite:granite1@ds047065.mlab.com:47065/team-granit",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  );
  mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => {
    console.dir("we are connected!");
  });
};

// mongodb://127.0.0.1:27017/Team-Granite-Dockerized-Users-Management-App-db

module.exports = connectToDatabase;
