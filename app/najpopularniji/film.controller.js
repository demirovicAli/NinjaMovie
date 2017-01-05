angular.module('ninja.najpopularniji').controller('filmCtrl', function($scope, $stateParams, filmService, IMG_URL) {


    $scope.movieGenres = [];
    $scope.film = {};
    $scope.slikaURL = IMG_URL;

    filmService.getMovieById($stateParams.id).then(function(response) {
        $scope.film = response;
        console.log($scope.film);
    });


});
