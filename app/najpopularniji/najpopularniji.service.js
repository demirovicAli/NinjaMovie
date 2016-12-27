angular.module('ninja.najpopularniji')
    .service('najpopularnijiService', function($http, API_BASE_URL, API_KEY) {

        this.getMostPopular = function() {
            return $http.get(API_BASE_URL + 'movie/popular?' + API_KEY)
                .then(function(response) {
                    return response.data;
                });

        };



        this.getMovieByGenre = function(zanr) {

            return $http.get(API_BASE_URL + 'genre/' + zanr + '/movies?' + API_KEY + '&language=en-US&include_adult=false&sort_by=created_at.asc')
                .then(function(response) {
                    return response.data;
                });
        };

        this.getListByYear = function(x) {
            return $http.get('https://api.themoviedb.org/3/discover/movie?api_key=5f1e3fe7439c1c65345fc1ba307278c4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=' + x)
                .then(function(response) {
                    console.log(x);
                    return response.data;
                    
                });
        };

       this.getListByKeyword = function(x) {
            return $http.get('https://api.themoviedb.org/3/discover/movie?api_key=5f1e3fe7439c1c65345fc1ba307278c4&sort_by=popularity.desc&with_keywords=' + x)
                .then(function(response) {
                    console.log(x);
                    return response.data;
                    
                });
        };

    });
