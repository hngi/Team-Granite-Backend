const express =  require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv =  require('dotenv');


dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
const connect = mongoose.connection;

connect.once('open', () => console.log('Connection to MongoDB Database established successfully!'));

app.get('/', (req, res) =>  res.json({msg:"Welcome to Dockerized User Management App"}));
app.listen(port, () => console.log(`Team Granite App is running on port: ${port}`));