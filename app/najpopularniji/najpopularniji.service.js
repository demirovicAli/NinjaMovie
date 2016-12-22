angular.module('ninja.najpopularniji')
.service('najpopularnijiService', function($http, API_BASE_URL, API_KEY) {

    this.getMostPopular = function() {
        return $http.get(API_BASE_URL + 'movie/popular?' + API_KEY)
            .then(function(response) {
                return response.data;
            });

    };

});
