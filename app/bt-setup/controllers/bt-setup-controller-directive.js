(function () {
    angular.module('battleShip')
        .controller('SetupControllerDirective', [ 'SetupTableService' , function (SetupTableService) {

            var vm = this;

            SetupTableService.initialize(vm.width, vm.height);
            vm.setupTable = SetupTableService.getTable();

            vm.selectedShip = { id: 1, length: 3, status: 'init' };

            vm.verticalOrientation = false;

            vm.checkSetupShip = checkSetupShip;

            function checkSetupShip(row, column) {
                return SetupTableService.checkShip(row, column, vm.selectedShip.length, vm.verticalOrientation);
            }

        }]);

})();

