(function () {
    'use strict';

    angular
        .module('battleShip')
        .service('SetupTableGetService', [ 'SetupTableProxy', '$q', function(SetupTableProxy, $q) {

            var self = this;

            self.getTable = getTable;


            function getTable() {
                var deferred = $q.defer();

                SetupTableProxy.getTable(4, 4).then(getTableSuccess, getTableError);

                function getTableSuccess(table) {
                    deferred.resolve(table);
                }

                function getTableError(error) {
                    deferred.reject(error);
                    // We can call an error service like modals, toasts...
                }

                return deferred.promise;

            }
        }]);
})();