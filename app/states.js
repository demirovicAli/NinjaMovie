angular
  .module('ninja')
  .config(function($urlRouterProvider){
    $urlRouterProvider.otherwise('/najpopularniji');
  }); 