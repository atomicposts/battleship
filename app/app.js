(function () {
    "use strict";

    angular.module('battleShip', ['ngRoute', 'bt-setup-module'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/start', {
                    templateUrl: 'app/templates/start.html'
                })
                .when('/setup', {
                    templateUrl: 'app/templates/setup.html',
                    controller: 'SetupController',
                    controllerAs: 'vmS',
                    resolve: {
                        table : ['SetupTableService', function (SetupTableService) {
                            return SetupTableService.getInitialTable(10, 10);
                        }]
                    }
                })
                .otherwise({
                    redirectTo: '/start'
                });
        }]);
}) ();

