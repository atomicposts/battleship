(function () {
    angular.module('battleShip')
        .controller('SetupControllerDirective', [ '$rootScope', 'SetupTableService', 'SetupTableCheckService' , function ($rootScope, SetupTableService, SetupTableCheckService) {
            var vm = this;

            vm.setupTable = [];
            vm.selectedShip = null;
            vm.setupTable  = SetupTableService.getTable();

            vm.selectedShip = null;
            vm.verticalOrientation = 'false';

            vm.checkSetupShip = checkSetupShip;

            // Event capture for ship selected
            $rootScope.$on('SELECT_SHIP', function(event, ship) {
                vm.selectedShip = ship;
            });

            function checkSetupShip(row, column) {
                return SetupTableCheckService.checkShip(vm.setupTable, row, column, vm.selectedShip.length, vm.verticalOrientation);
            }

        }]);

})();

