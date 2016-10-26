var battleShip = angular.module('battleShip', ['ng-route']);

battleShip.config(['$routerProvider', function ($routerProvider){
    $routerProvider
    .when('/start', {
        templateUrl : 'app/start.html',
        controller: 'StartController'
    })
    .when('/game', {
        templateUrl : 'app/setup.html',
        controller: 'SetupController'
    })
    .otherwise({
        redirectTo : '/start'
    });
}]);
