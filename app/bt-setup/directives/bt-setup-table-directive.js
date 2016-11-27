(function () {
    "use strict";

    angular.module('bt-setup-module')
        .directive('setupTableDirective', function ($compile, $timeout, SetupTableService) {
            return {
                restrict: 'E',
                templateUrl: 'app/bt-setup/assets/setup-table.html',
                controller: 'SetupControllerDirective',
                controllerAs: 'ctrl',
                bindToController: true,
                scope: {
                    width: '@',
                    height: '@'
                }
            };
        });
})();
