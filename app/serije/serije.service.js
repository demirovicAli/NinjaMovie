angular.module("ninja.serije").service('serijeService', function($http, API_BASE_URL, API_KEY) {


    this.getMostPopular = function() {
        return $http.get(API_BASE_URL + 'tv/popular?' + API_KEY)
            .then(function(response) {
                return response.data;
            });

    };

    this.getTvByGenre = function(zanr) {

        return $http.get( API_BASE_URL +  'discover/tv?' + API_KEY + '&sort_by=popularity.desc&with_genres=' + zanr)
            .then(function(response) {
                return response.data;
            });
    };


});
