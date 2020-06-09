const express =  require('express');
const connectDB = require('./src/db/mongoose');
const User = require('./src/models/user');
const dotenv =  require('dotenv');

dotenv.config();

const app = express();

// Connect to DB
connectDB();

//Middleware
app.use(express.json({ extended: false }))

// app.use(express.json());

app.get('/', (req, res) =>  
  res.json({msg:"Welcome to Dockerized User Management App"}));

// Defined Routes
app.use('/users', require('./routes/users'));
// app.use('/auth', require('./routes/auth'));

//testing mongoose connection
// app.post('/createUser',(request,response) => {
//     console.log(request.body);

//     const user = new User(request.body)

//     user.save().then(() => {
//         response.send(user)
//     }).catch((e) => {
//         response.status(400).send(e)
//     })
// })

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Team Granite App is running on port: ${port}`));