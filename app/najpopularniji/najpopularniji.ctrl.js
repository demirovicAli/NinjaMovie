angular
  .module('ninja.najpopularniji')
  .controller('NajpopularnijiCtrl', function($scope, $stateParams, najpopularnijiService, IMG_URL){

$scope.slikaURL = IMG_URL;
$scope.najpopularniji = [];


          najpopularnijiService.getMostPopular()
            .then(function(najpopularniji){
              $scope.najpopularniji = najpopularniji.results;
              console.log(najpopularniji);
            })
            .catch(function(e){
              console.error(e);
            });



  });