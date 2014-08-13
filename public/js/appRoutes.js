//Set up the routing rules for the Angular Front - End

angular.module('appRoutes', []).config(['$routeProvider', function($routeProvider){
	$routeProvider

	//home page
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'MainController'
	})
}]);