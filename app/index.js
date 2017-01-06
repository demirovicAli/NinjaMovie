angular.module('ninja', [
        'ngCookies',
        'ninja.user',
        'ninja.najpopularniji',
        'ninja.serije',
        'ui.router',
        'ngRoute'
    ]).config(function($httpProvider) {
        // Postavljamo flag withCredentials na true da bi omogucili da angular snimi i koristi
        // Session Cookie koji nam api vraca prilikom logina
/*        $httpProvider.defaults.withCredentials = false;
*/    })
    .run(function($rootScope, $cookies, $state, $location, $http, userService, $window) {

        // Flag koji nam sluzi da bi na UIju prikazali ili sakrili neke elemente
        $rootScope.userLoggedIn = false;

        // Metoda logout brise sesiju na apiju, a nakon toga brise nak cookie
        // i postavlja sve flagove na defaultne postavke
        $rootScope.logout = function() {
            userService.logout()
                .then(function() {
                    $cookies.remove('ninjaUser');
                    $rootScope.userLoggedIn = false;
                    $rootScope.user = {};
                    $state.go('login');
                });
        };

        $rootScope.token = '';

        $rootScope.getToken = function() {
            userService.getToken().then(function(response) {
                $rootScope.token = response.request_token;
                console.log($rootScope.token);
                 $window.location.href = 'https://www.themoviedb.org/authenticate/'+ $rootScope.token +'?redirect_to=http://localhost:8080/';
            });
        };



    });
