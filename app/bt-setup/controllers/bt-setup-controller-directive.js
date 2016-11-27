(function () {
    angular.module('bt-setup-module')
        .controller('SetupControllerDirective', [ '$rootScope', 'SetupTableService', 'SetupTableCheckService' , function ($rootScope, SetupTableService, SetupTableCheckService) {

            var vm = this;

            vm.setupTable = [];
            vm.selectedShip = null;
            vm.setupTable  = SetupTableService.getTable();

            vm.verticalOrientation = 'false';

            vm.checkSetupShip = checkSetupShip;
            vm.resetCellClass = resetCellClass;

            // Event capture for ship selected
            $rootScope.$on('SELECT_SHIP', function(event, ship) {
                vm.selectedShip = ship;
            });

            function checkSetupShip(row, column) {
                if (vm.selectedShip !== null) {
                    var check = SetupTableCheckService.checkShip(vm.setupTable, row, column, vm.selectedShip.length, vm.verticalOrientation);

                    vm.setupTable[row][column].class += (check === false) ? ' danger' : ' success';
                }
            }

            function resetCellClass(row, column) {
                if (vm.selectedShip !== null) {
                    vm.setupTable[row][column].class = vm.setupTable[row][column].class.substr(0, vm.setupTable[row][column].class.indexOf(' '));
                }
            }

        }]);

})();

