angular.module('ninja.serije').controller('serijeCtrl', function($scope, $stateParams, serijeService, IMG_URL) {
$scope.genres = [
    {
      "id": 10759,
      "name": "Action & Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 10762,
      "name": "Kids"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10763,
      "name": "News"
    },
    {
      "id": 10764,
      "name": "Reality"
    },
    {
      "id": 10765,
      "name": "Sci-Fi & Fantasy"
    },
    {
      "id": 10766,
      "name": "Soap"
    },
    {
      "id": 10767,
      "name": "Talk"
    },
    {
      "id": 10768,
      "name": "War & Politics"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ];
  
    $scope.slikaURL = IMG_URL;
    $scope.serije = [];


$scope.getTvByGenre = function (zanr){
	serijeService.getTvByGenre(zanr)
	.then(function(pozanru){
$scope.serije = pozanru.results;
console.log($scope.serije);
	});

};

    serijeService.getMostPopular()
        .then(function(najpopularniji) {
            $scope.serije = najpopularniji.results;
            console.log(najpopularniji);
        })
        .catch(function(e) {
            console.error(e);
        });




});
