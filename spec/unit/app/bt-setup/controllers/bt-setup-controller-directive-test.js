describe('Setup Table Controller Directive Test', function () {

    var rootScope, scope, controller;

    var mockTable = [
        [ { value: 0, class: 'water test'}, { value: -1, class: 'touch'}, { value: -1, class: 'touch'}, { value: 0, class: 'water'}],
        [ { value: 0, class: 'water'}, { value: 0, class: 'water'}, { value: 0, class: 'water'}, { value: 0, class: 'water'}],
        [ { value: 0, class: 'water'}, { value: 2, class: 'ship'}, { value: 2, class: 'ship'}, { value: 0, class: 'water'}],
        [ { value: 0, class: 'water'}, { value: 0, class: 'water'}, { value: 0, class: 'water'}, { value: 0, class: 'water'}]
    ];

    var fakeSetupTableService = {
        getTable: jasmine.createSpy('getTable').and.callFake(function () {
            return mockTable;
        })
    };

    var fakeSetupTableCheckService = {
        checkShip: jasmine.createSpy()
    };

    beforeEach(module('battleShip'));

    beforeEach(inject(function($rootScope) {
        rootScope = $rootScope;
        scope = $rootScope.$new();
    }));

    describe('when SELECT_SHIP event is broadcasted', function() {
        beforeEach(inject(function($controller) {
            controller = $controller('SetupControllerDirective', {
                $rootScope : scope,
                SetupTableService: fakeSetupTableService
            });
            scope.$digest();
        }));

        it('vm.selectedShip should get broadcasted ship', function () {
            rootScope.$broadcast('SELECT_SHIP', 'test');
            expect(controller.selectedShip).toBe('test');

        });
    });


    describe('when checkSetupShip is called', function() {
        beforeEach(inject(function($controller) {
            controller = $controller('SetupControllerDirective', {
                $rootScope : scope,
                SetupTableService: fakeSetupTableService,
                SetupTableCheckService: fakeSetupTableCheckService
            });
            scope.$digest();
            controller.selectedShip = {
                length: 2
            };
        }));

        it('SetupTableCheckService.checkShip should be called', function() {
            controller.checkSetupShip(1,2);
            expect(fakeSetupTableCheckService.checkShip).toHaveBeenCalled();
        });
    });

    describe('when checkSetupShip is called', function() {
        beforeEach(inject(function($controller) {
            controller = $controller('SetupControllerDirective', {
                $rootScope : scope,
                SetupTableService: fakeSetupTableService,
                SetupTableCheckService: fakeSetupTableCheckService
            });
            scope.$digest();
            controller.selectedShip = {
                length: 2
            };
        }));

        it('table cell class in row 0 and column 0 should be water', function() {
            controller.resetCellClass(0, 0);
            expect(controller.setupTable[0][0].class).toBe('water');
        });
    });

});