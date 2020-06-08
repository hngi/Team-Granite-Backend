var express = require('express');                       // requiring express
var app = express();                                    // getting express isntance
var mysql = require('mysql');                           // requiring MYSQL Database
var passport = require("passport");                     // requiring passport for saving session and authetication with session using local strategies, Google or what ever means
const session = require("express-session");             // for persistence session login and logout (saving user session in the database)
const MySQLStore = require('express-mysql-session')(session);  // saving session in mysql databse
const router = express.Router(); // is for routering eg router.get('/userLogin', ()=>{}); router.post('/userLogin', ()=>{}); etc thereafter you export it, module.export = router

// this is the connection of the database to the nodeJS project
    var con = mysql.createPool({ 
        user: 'root',  // authorised database user name
        database: 'Team-Granite-Dockerized-Users-Management-App-db',  // this is the database name
        password: '',  // this is the database password, i set it to empty
        host: 'localhost', // it is running on local host now
        port:3306, // this is the port  number the mysql database is listening to
        connectionLimit: 10, // this is the total number of connections the database is to listen to at a single instance
        connectTimeout: 10000, // connection timeout to a second
        waitForConnections: true, // this will make others to wait till the first set of 10 persons(connectionLimit) access the database
        queueLimit: 0, //  no queuing

    });
var options; // setting this options tells NodeJS  the mySQL database information
    options = {
        user: 'root',
        database: 'Team-Granite-Dockerized-Users-Management-App-db',
        password: '',
        host: 'localhost',
        port:3306
    }
const sessionStore = new MySQLStore(options); // this will authomatically save user sessions when a user is authorised
app.use(session({
    secret: 'keyboard cat',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// to create a database table for user , use
//con.query('CREATE TABLE IF NOT EXISTS `user`(`id` int(11) NOT NULL AUTO_INCREMENT, `firstname` text(1000) NOT NULL, `lastname` text(1000) NOT NULL, `email` text(1000) NOT NULL, `phonenumber` int(15) NOT NULL,  `age` int(1000) NOT NULL, PRIMARY KEY(`id`) ON DELETE CASCADE ON UPDATE CASCADE)');

// AM DONE CONNECTING NODE JS WITH MYSQL DATABASE
// WOULD HAVE CREATED A USER.JS FILE AND WRITE THE CRUD MYSQL API FOR CREATING , DELETING, UPDATING USERS AND USER INFO
// BUT AM  NOT INSTRUCTED TO. THANKS
//  HNGi7 ID = HNG-03845
// SLACK username = ugbotor
