var battleShip = angular.module('battleShip', ['ngRoute']);

battleShip.config(['$routeProvider', function ($routeProvider){
    $routeProvider
    .when('/start', {
        templateUrl : 'app/start.html',
        controller: 'StartController'
    })
    .when('/setup', {
        templateUrl : 'app/setup.html',
        controller: 'SetupController'
    })
    .otherwise({
        redirectTo : '/start'
    });
}]);
