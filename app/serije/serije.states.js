angular
    .module('ninja.serije')
    .config(function($stateProvider) {
        $stateProvider
            .state('serije', {
                url: '/serije',
                templateUrl: 'app/serije/templates/serije.html',
                controller: 'serijeCtrl'
            });
    });
