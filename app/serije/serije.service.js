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


        this.getListByYear = function(x) {
            return $http.get('https://api.themoviedb.org/3/discover/tv?api_key=5f1e3fe7439c1c65345fc1ba307278c4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=' + x)
                .then(function(response) {
                    console.log(x);
                    return response.data;
                    
                });
        };
        
       this.getListByKeyword = function(x) {
            return $http.get('http://api.themoviedb.org/3/search/tv?query='+x+'&api_key=5f1e3fe7439c1c65345fc1ba307278c4')
                .then(function(response) {
                    console.log(x);
                    return response.data;
                    
                });
        };

});
