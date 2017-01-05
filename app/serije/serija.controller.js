angular.module('ninja.serije').controller('serijaCtrl', function($scope, $stateParams, serijaService, IMG_URL) {
   
    $scope.movieGenres = [];
    $scope.serija = {};
    $scope.slikaURL = IMG_URL;

    serijaService.getMovieById($stateParams.id).then(function(response) {
        $scope.serija = response;
        console.log($scope.serija);
    });




   });