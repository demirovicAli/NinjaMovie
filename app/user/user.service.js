angular.module('ninja.user').service('userService', function ($http){
	

	// https://developers.themoviedb.org/3/authentication
	// registracijq

this.getToken = function (){

	  return $http.get(' https://api.themoviedb.org/3/authentication/token/new?api_key=5f1e3fe7439c1c65345fc1ba307278c4')
            .then(function(response) {
                return response.data;
           
            });
};


});