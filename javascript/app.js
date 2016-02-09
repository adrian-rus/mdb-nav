// defining the app module of the project
angular.module('moviesDBApp', ['ngRoute','movieDBControllers','movieDBDirectives','movieDBServices'])
.constant("myMovieConfig", {
        "moviesEndpoint" : "https://api.themoviedb.org/3/movie",
        "apiKey": "f9dff025e95263f2462e8bccdeb5d011"
    })
.config(function($routeProvider) {
		 
		$routeProvider
			.when('/home', {
		  	templateUrl: 'templates/home.html',
		  	controller: 'HomeController'
		  })

		  .when('/popular', {
		  	templateUrl: 'templates/movies.html',
		  	controller: 'MovieListController'
		  })

		  .when('/upcoming', {
		  	templateUrl: 'templates/movies.html',
			controller: 'MovieUpcomingController'
		  })

		  .when('/topRated', {
		  	templateUrl: 'templates/movies.html',
			controller: 'MovieTopRatedController'
		  })

		  .when("/nowPlaying", {
			templateUrl: "templates/movies.html",
			controller: "MovieNowPlayingController"
		  })

		  .when('/about', {
                  templateUrl: 'templates/about.html',
                  controller: 'AboutController'
       	  })

		  .when("/error/:message/:status", {
                 templateUrl: "templates/error.html",
                 controller: 'MovieErrorController'
          })
          
          .when('/movie/:movieId', {
                 templateUrl: 'templates/movieDetails.html',
                 controller: 'MovieDetailsController'
          })

		  .otherwise({
		  	redirectTo: '/popular'
		  });
	});