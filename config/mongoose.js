var mongoose = require('mongoose'),
	fs = require('fs');

	//connect to the db
	var connect = function(){
		var options = {server: {socketOptions: {keepAlive: 1}}}
		mongoose.connect('mongodb://localhost/test', options)
	}
	connect();
	//console.log successful connection
	mongoose.connection.once('open', function(){
		console.log('connected to mongodb, coming from config/mongoose.js')
	})
	//errors
	mongoose.connection.on('error', function(err){
		console.log(err);
	})
	//reconnect when closed
	mongoose.connection.on('disconnected', function(){
		connect();
	})

	//Models go here:
	//check on pathts
	// var models_path = __dirname + '/../models'
	// fs.readdirSync(models_path).forEach(function (file) {
	//   if (~file.indexOf('.js')) require(models_path + '/' +  file)
	// })