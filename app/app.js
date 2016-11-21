(function () {
    "use strict";

    angular.module('battleShip', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/start', {
                    templateUrl: 'app/start.html',
                    controller: 'StartController'
                })
                .when('/setup', {
                    templateUrl: 'app/setup.html',
                    controller: 'SetupController',
                    controllerAs: 'vmS',
                    resolve: {
                        table : ['SetupTableService', function (SetupTableService) {
                            return SetupTableService.getInitialTable();
                        }]
                    }
                })
                .otherwise({
                    redirectTo: '/start'
                });
        }]);
}) ();

