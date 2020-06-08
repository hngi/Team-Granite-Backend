const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Team-Granite-Dockerized-Users-Management-App-db',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})