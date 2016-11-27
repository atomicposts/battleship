(function () {
    'use strict';

    angular.module('bt-setup-module')
        .service('SetupTableService', ['$q', 'SetupTableGetService', 'SetupTableTransformer', function($q, SetupTableGetService, SetupTableTransformer) {

            var self= this;
            self.getInitialTable = getInitialTable;
            self.getTable = getTable;
            var table = [];

            function getInitialTable(width, height) {
                var deferred = $q.defer();

                SetupTableGetService.getTable(width, height).then(getTableSuccess, getTableError);

                return deferred.promise;

                function getTableSuccess(data) {
                    var transformedInfo = SetupTableTransformer.transform(data);
                    table = transformedInfo;
                    deferred.resolve(transformedInfo);
                }

                function getTableError(responseError) {
                    deferred.reject(responseError);
                }
            }

            function getTable() {
                return table;
            }
        }]);
})();