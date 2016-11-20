describe('Setup Table Transformer Test ', function () {

    var mockSetupTable = [
        [0, -1, -1, 0], [0, 0, 0, 0], [0, 2, 2, 0], [0, 0, 0, 0]
    ];
    var transformedResult = [
        [ { value: 0, class: 'water'}, { value: -1, class: 'touch'}, { value: -1, class: 'touch'}, { value: 0, class: 'water'}],
        [ { value: 0, class: 'water'}, { value: 0, class: 'water'}, { value: 0, class: 'water'}, { value: 0, class: 'water'}],
        [ { value: 0, class: 'water'}, { value: 2, class: 'ship'}, { value: 2, class: 'ship'}, { value: 0, class: 'water'}],
        [ { value: 0, class: 'water'}, { value: 0, class: 'water'}, { value: 0, class: 'water'}, { value: 0, class: 'water'}]
    ];

    var setupTableTransformer;

    beforeEach(module('battleShip'));

    describe('setup table transform function', function () {

        beforeEach(inject(function (SetupTableTransformer) {
            setupTableTransformer = SetupTableTransformer;
        }));

        it('correctly transform setupTable info', function () {
            var setupTable = setupTableTransformer.transform(mockSetupTable);
            expect(angular.equals(setupTable, transformedResult)).toBe(true);
        });
    });

});

