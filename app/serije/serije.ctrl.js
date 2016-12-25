angular.module('ninja.serije').controller('serijeCtrl', function ($scope, $stateParams, serijeService, IMG_URL){


$scope.slikaURL = IMG_URL;
$scope.serije = [];


          serijeService.getMostPopular()
            .then(function(najpopularniji){
              $scope.serije = najpopularniji.results;
              console.log(najpopularniji);
            })
            .catch(function(e){
              console.error(e);
            });




});