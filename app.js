const express =  require('express');

const dotenv =  require('dotenv');


dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) =>  res.json({msg:"Welcome to Dockerized User Management App"}));
app.listen(port, () => console.log(`Team Granite App is running on port: ${port}`));