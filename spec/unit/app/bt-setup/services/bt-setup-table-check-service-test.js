describe('Setup Table Check Service test', function () {

    var setupTableCheckService;

    beforeEach(module('battleShip'));
    beforeEach(inject(function (SetupTableCheckService) {
        setupTableCheckService = SetupTableCheckService;
    }));

    describe('when horizontal check', function () {
        var mockTable =  [
            [{class: "water", value: 0 }, {class: "water", value: 1 }, {class: "water", value: 1 }, {class: "water", value: 1 }],
            [{class: "water", value: 0 }, {class: "water", value: 0 }, {class: "water", value: 0 }, {class: "water", value: 0 }],
            [{class: "water", value: 0 }, {class: "water", value: 0 }, {class: "water", value: 0 }, {class: "water", value: 0 }],
            [{class: "water", value: 0 }, {class: "water", value: 0 }, {class: "water", value: 1 }, {class: "water", value: 1 }]
        ];

        it('and ship is longer than free cells should return false', function () {
            var result = setupTableCheckService.checkShip(mockTable, 0, 0, 10, 'false');
            expect(result).toBeFalsy();
        });

        it('and there is a ship below should return false', function () {
            var result = setupTableCheckService.checkShip(mockTable, 1, 0, 3, 'false');
            expect(result).toBeFalsy();
        });

        it('and there is a ship under should return false', function () {
            var result = setupTableCheckService.checkShip(mockTable, 2, 0, 3, 'false');
            expect(result).toBeFalsy();
        });

        it('and ship fits should return true', function () {
            var result = setupTableCheckService.checkShip(mockTable, 2, 0, 1, 'false');
            expect(result).toBeTruthy();
        });
    });

    describe('when vertical check', function () {
        var mockTable =  [
            [{class: "water", value: 1 }, {class: "water", value: 0 }, {class: "water", value: 0 }, {class: "water", value: 0 }],
            [{class: "water", value: 1 }, {class: "water", value: 0 }, {class: "water", value: 0 }, {class: "water", value: 0 }],
            [{class: "water", value: 1 }, {class: "water", value: 0 }, {class: "water", value: 0 }, {class: "water", value: 1 }],
            [{class: "water", value: 1 }, {class: "water", value: 0 }, {class: "water", value: 0 }, {class: "water", value: 1 }]
        ];

        it('and ship is longer than free cells should return false', function () {
            var result = setupTableCheckService.checkShip(mockTable, 0, 0, 10, 'true');
            expect(result).toBeFalsy();
        });

        it('and there is a ship below should return false', function () {
            var result = setupTableCheckService.checkShip(mockTable, 0, 1, 3, 'true');
            expect(result).toBeFalsy();
        });

        it('and there is a ship under should return false', function () {
            var result = setupTableCheckService.checkShip(mockTable, 0, 2, 3, 'true');
            expect(result).toBeFalsy();
        });

        it('and ship fits should return true', function () {
            var result = setupTableCheckService.checkShip(mockTable, 0, 2, 1, 'true');
            expect(result).toBeTruthy();
        });
    });

});