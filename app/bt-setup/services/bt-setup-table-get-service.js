(function () {
    'use strict';

    angular
        .module('bt-setup-module')
        .service('SetupTableGetService', [ 'SetupTableProxy', '$q', function(SetupTableProxy, $q) {

            var self = this;

            self.getTable = getTable;


            function getTable(width, height) {
                var deferred = $q.defer();

                SetupTableProxy.getTable(width, height).then(getTableSuccess, getTableError);

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