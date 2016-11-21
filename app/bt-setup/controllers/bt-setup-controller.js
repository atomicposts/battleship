(function(){
    angular.module('battleShip')
        .controller('SetupController', ['table', '$rootScope', function (table, $rootScope) {
            var vm = this;

            vm.ships = [{
                id: 1,
                length: 4,
                status: 'init'
            },{
                id: 2,
                length: 3,
                status: 'init'
            },{
                id: 3,
                length: 2,
                status: 'init'
            }
            ];

            vm.horizontal = true;

            //Event
            vm.selectShip = function (ship) {
                vm.shipSelected = ship;
                $rootScope.$broadcast('SELECT_SHIP', ship);
            };

            initialize();

            function initialize() {
                vm.shipSelected = vm.ships[0];
                $rootScope.$broadcast('SELECT_SHIP', vm.shipSelected);
            }

        }]);
})();

