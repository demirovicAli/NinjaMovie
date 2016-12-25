angular.module("ninja.serije").service('serijeService', function($http, API_BASE_URL, API_KEY) {



    this.getMostPopular = function() {
        return $http.get(API_BASE_URL + 'tv/popular?' + API_KEY)
            .then(function(response) {
                return response.data;
            });

    };




});
