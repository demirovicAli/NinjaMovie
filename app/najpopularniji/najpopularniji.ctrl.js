angular
    .module('ninja.najpopularniji')
    .controller('NajpopularnijiCtrl', function($scope, $stateParams, najpopularnijiService, IMG_URL) {

        $scope.genres = [{
            "id": 28,
            "name": "Action"
        }, {
            "id": 12,
            "name": "Adventure"
        }, {
            "id": 16,
            "name": "Animation"
        }, {
            "id": 35,
            "name": "Comedy"
        }, {
            "id": 80,
            "name": "Crime"
        }, {
            "id": 99,
            "name": "Documentary"
        }, {
            "id": 18,
            "name": "Drama"
        }, {
            "id": 10751,
            "name": "Family"
        }, {
            "id": 14,
            "name": "Fantasy"
        }, {
            "id": 36,
            "name": "History"
        }, {
            "id": 27,
            "name": "Horror"
        }, {
            "id": 10402,
            "name": "Music"
        }, {
            "id": 9648,
            "name": "Mystery"
        }, {
            "id": 10749,
            "name": "Romance"
        }, {
            "id": 878,
            "name": "Science Fiction"
        }, {
            "id": 10770,
            "name": "TV Movie"
        }, {
            "id": 53,
            "name": "Thriller"
        }, {
            "id": 10752,
            "name": "War"
        }, {
            "id": 37,
            "name": "Western"
        }];


        $scope.godina = 0;
        $scope.slikaURL = IMG_URL;
        $scope.najpopularniji = [];
        $scope.pretraga = "";

        najpopularnijiService.getMostPopular()
            .then(function(najpopularniji) {
                $scope.najpopularniji = najpopularniji.results;
                console.log(najpopularniji);
            })
            .catch(function(e) {
                console.error(e);
            });

        $scope.getMoviesByYear = function(x) {
            najpopularnijiService.getListByYear(x)
                .then(function(pozanru) {
                    $scope.najpopularniji = pozanru.results;
                    console.log($scope.najpopularniji);
                });

        };
        $scope.getMovieByGenre = function(zanr) {
            najpopularnijiService.getMovieByGenre(zanr)
                .then(function(pozanru) {
                    $scope.najpopularniji = pozanru.results;
                    console.log($scope.najpopularniji);
                });
        };

        $scope.getMoviesByKeyword = function(pretraga) {
            najpopularnijiService.getListByKeyword(pretraga)
                .then(function(pretraga) {
                    $scope.najpopularniji = pretraga.results;
                    console.log($scope.najpopularniji);
                });
        };
    });
