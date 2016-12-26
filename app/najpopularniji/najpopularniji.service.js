angular.module('ninja.najpopularniji')
.service('najpopularnijiService', function($http, API_BASE_URL, API_KEY) {

    this.getMostPopular = function() {
        return $http.get(API_BASE_URL + 'movie/popular?' + API_KEY)
            .then(function(response) {
                return response.data;
            });

    };



    this.getMovieByGenre = function(zanr) {

        return $http.get( API_BASE_URL +  'genre/'+zanr+'/movies?' + API_KEY + '&language=en-US&include_adult=false&sort_by=created_at.asc')
            .then(function(response) {
                return response.data;
            });
    };



});
