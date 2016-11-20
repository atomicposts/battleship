(function () {
    'use strict';

    angular
        .module('battleShip')
        .factory('SetupTableProxy', ['$http', '$q', function ($http, $q) {
            var service = {
                getTable: getTable
            };

            return service;

            function getTable(width, height) {
                var config = {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                };

                return $http.get('/table.json', config)
                    .then(getTableSuccess, getTableFailed);

                function getTableSuccess(response) {
                    return response.data;
                }

                function getTableFailed(response) {
                    return $q.reject({ data: response.data, errorCode: response.status });
                }
            }

        }]);

})();

