describe('Setup Table Directive test', function () {

    beforeEach(module('battleShip'));
    beforeEach(module('templates'));

    var mockTable = [
        [{ value: 0, class: 'water' }, { value: 0, class: 'water' }],
        [{ value: 0, class: 'water' }, { value: 0, class: 'water' }]
    ];
    var fakeSetupTableService = {
        getTable: jasmine.createSpy()
    };

    beforeEach(module(function ($provide) {
        $provide.value('SetupTableService', fakeSetupTableService);
    }));

    describe('when Setup Table Service return 2 x 2 table', function () {
        var element, scope, controller;
        beforeEach(inject(function($rootScope, $compile, $controller) {
            controller = $controller;
            fakeSetupTableService.getTable = jasmine.createSpy('getTable').and.callFake(function () {
                return mockTable;
            });

            scope = $rootScope.$new();
            element = angular.element('<setup-table-directive width="2" height="2"></setup-table-directive>');
            $compile(element)(scope);
            scope.$digest();

            controller = element.controller('setupTableDirective');

        }));

        it('should show table with 4 cells (td)', function () {
            var tds = element.find('td');
            expect(tds.length).toBe(4);
        });

    });

    describe('when Setup Table Service return 2 x 2 table and we mouseover selecting a ship with 2 cells of length', function () {
        var element, scope, controller;
        beforeEach(inject(function($rootScope, $compile, $controller) {
            controller = $controller;
            fakeSetupTableService.getTable = jasmine.createSpy('getTable').and.callFake(function () {
                return mockTable;
            });

            scope = $rootScope.$new();
            element = angular.element('<setup-table-directive width="2" height="2"></setup-table-directive>');
            $compile(element)(scope);
            scope.$digest();

            controller = element.controller('setupTableDirective');
            controller.selectedShip = {
                id: 3,
                length: 2,
                status: 'init'
            };

        }));

        it('first td cell after mouseover should have success css class', function () {
            var tds = element.find('td');
            var td = angular.element(tds[0]);
            td.triggerHandler('mouseover');
            expect(td.hasClass('success')).toBeTruthy();
        });

        it('second td cell after mouseover should have danger css class', function () {
            var tds = element.find('td');
            var td = angular.element(tds[1]);
            td.triggerHandler('mouseover');
            expect(td.hasClass('danger')).toBeTruthy();
        });

        it('td cell after mouseleave should have water css class', function () {
            var tds = element.find('td');
            var td = angular.element(tds[0]);
            td.triggerHandler('mouseleave');
            expect(td.hasClass('water')).toBeTruthy();
            expect(td.hasClass('success')).toBeFalsy();
        });

    });

});