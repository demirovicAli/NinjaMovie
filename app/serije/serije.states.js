angular
    .module('ninja.serije')
    .config(function($stateProvider) {
        $stateProvider
            .state('serije', {
                url: '/serije',
                templateUrl: 'app/serije/templates/serije.html',
                controller: 'serijeCtrl'
            })
            .state('serija', {
                url: '/serija',
                templateUrl: 'app/serije/templates/serija.html',
                controller: 'serijaCtrl',
                params: {
                    id: null,
                }
            });
    });
