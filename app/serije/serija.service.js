angular.module("ninja.serije").service('serijaService', function($http, API_BASE_URL, API_KEY) {

            this.getMovieById = function(id) {
                return $http.get('https://api.themoviedb.org/3/tv/' + id + '?api_key=5f1e3fe7439c1c65345fc1ba307278c4&language=en-US')
                    .then(function(response) {
                        return response.data;
                    });


            };
});