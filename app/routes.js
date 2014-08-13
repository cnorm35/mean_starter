module.exports = function(app){
	//This is where all the server routes and api calls would hit.  
	//Keep front end and back end seperated as much as possible.

	// app.get();
	// app.post()


	//This will pass the request to the spa with it's own routing.
	app.get('*', function(req, res){
		res.sendfile('./public/views/index.html');
	});

}