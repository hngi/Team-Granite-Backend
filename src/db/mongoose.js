import mongoose from "mongoose";

const connectToDatabase = () => {
  mongoose.connect(
    "mongodb://team-granite:granite1@ds047065.mlab.com:47065/team-granite",
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

export default connectToDatabase;
