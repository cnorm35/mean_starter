var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
// call require mongose in config file, link to require
// var mongoose = require('mongoose');
var path = require('path');

//call mongoose from module
var mongoose = require('./config/mongoose')

// var db = require('./config/db');
//changed setting db to the config module to go off mongoose connection docs.
// mongoose.connect('mongodb://localhost/test');

//get notified of any connections to the db
// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error from mongo on server.js: '));
// db.once('open', function callback(){
// 	console.log('connection to db from server.js file...bitches');
// })

//calling mongo connect on mongoose file, 
// mongoose.connect(db.url);

var port = process.env.PORT || 8000;

// __________________uncomment after the inital server set up and db running.
// mongoose.connect(db.url);

// get all data of the POST params
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));

//Require the routes module and pass in the app
require('./app/routes')(app);

app.listen(port);
console.log('Magic happens on port: ' + port);

exports = module.exports = app;
