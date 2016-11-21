describe('Setup Table Controller Test', function () {

    var rootScope, scope, controller;

    beforeEach(module('battleShip'));

    beforeEach(inject(function($rootScope) {
        rootScope = $rootScope;
        scope = $rootScope.$new();
    }));


    describe('when start controller', function() {
        beforeEach(inject(function($controller) {
            spyOn(scope, "$broadcast");
            controller = $controller('SetupController', {
                table: {},
                $rootScope : scope
            });
            scope.$digest();
        }));

        it('horizontal var should be true', function () {
            expect(controller.horizontal).toBeTruthy();
        });

        it('SELECT_SHIP event should be called', function(){
            var firstShip = {
                id: 1,
                length: 4,
                status: 'init'
            };
            expect(scope.$broadcast).toHaveBeenCalledWith('SELECT_SHIP', firstShip);
        });
    });

    describe('when selectShip is called', function(){
        var mockShip = {'value' : 'demo', 'class': 'demo'};

        beforeEach(inject(function($controller) {
            spyOn(scope, "$broadcast");
            controller = $controller('SetupController', {
                table: {},
                $rootScope : scope
            });
            scope.$digest();
        }));

        it('selectedShip should be empty', function(){
            controller.selectShip({});
            expect(controller.shipSelected).toEqual({});
        });

        it('selectedShip class should be demo', function(){
            controller.selectShip(mockShip);
            expect(controller.shipSelected.class).toEqual(mockShip.class);
        });

        it('SELECT SHIP should be called with mockShip', function () {
            controller.selectShip(mockShip);
            expect(scope.$broadcast).toHaveBeenCalledWith('SELECT_SHIP', mockShip);
        });

    });

});