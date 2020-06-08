const express =  require('express');
const dotenv =  require('dotenv');
const mongoose = require('mongoose');


// import environmental variables from our variables.env file
dotenv.config({ path: 'variables.env' });

// Connect to our Database and handle any bad connections
mongoose.connect(process.env.DATABASE);
mongoose.connection.on('error', (err) => {
  console.error(`${err.message}`);
});

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) =>  res.json({msg:"Welcome to Dockerized User Management App"}));
app.listen(port, () => console.log(`Team Granite App is running on port: ${port}`));