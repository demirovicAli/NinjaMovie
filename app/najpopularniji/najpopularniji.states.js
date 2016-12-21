angular
    .module('ninja.najpopularniji')
    .config(function($stateProvider) {
        $stateProvider
            .state('najpopularniji', {
                url: '/najpopularniji',
                templateUrl: 'app/najpopularniji/templates/najpopularniji.html',
                controller: 'NajpopularnijiCtrl'
            });
    });
