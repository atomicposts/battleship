(function(){
    angular.module('battleShip')
        .controller('SetupController', function () {
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
            vm.shipSelected = vm.ships[0];

        });
})();

