describe('Setup Table Service test', function () {

    var setupTableService;
    var mockResponse = [[0, 0], [0, 0]];

    var fakeSetupTableGetService = {
        getTable: jasmine.createSpy()
    };

    beforeEach(module('battleShip'));

    beforeEach(module(function ($provide) {
        $provide.value('SetupTableGetService', fakeSetupTableGetService);
    }));

    beforeEach(inject(function (SetupTableService) {
        setupTableService = SetupTableService;
    }));

    describe('when SetupTableGetTable resolves the promise', function () {
        var resultTransformed = [
            [{class: "water", value: 0 }, {class: "water", value: 0 }],
            [{class: "water", value: 0 }, {class: "water", value: 0 }]
        ];

        beforeEach(inject(function ($q) {
            fakeSetupTableGetService.getTable = jasmine.createSpy('getTable').and.callFake(function () {
                var deferred = $q.defer ();
                var response = deferred.promise;

                deferred.resolve(mockResponse);
                return response;
            });
        }));

        it('getInitialTable should be called and result should be returned transformed', function (done) {
            inject(function($rootScope) {
                setupTableService.getInitialTable(2, 3).then(function (responseData) {
                    expect(responseData).toEqual(resultTransformed);
                    done();
                });
                $rootScope.$digest(); // To make a digest cycle
            });
        });

        it('getTable should be called, and result should be returned', function (done) {
            inject(function($rootScope) {
                setupTableService.getInitialTable(2, 3).then(function (responseData) {
                    expect(responseData).toEqual(resultTransformed);
                    var result = setupTableService.getTable();
                    expect(result).toEqual(resultTransformed);
                    done();
                });
                $rootScope.$digest(); // To make a digest cycle
            });

        });
    });

    describe('when SetupTable rejects the promise', function () {
        beforeEach(inject(function($q) {
            fakeSetupTableGetService.getTable = jasmine.createSpy('getTable').and.callFake(function () {
                var deferred = $q.defer ();
                var response = deferred.promise;

                deferred.reject('error');
                return response;
            });
        }));

        it('getInitialTable should be called and result should be an error', function (done) {
            inject(function ($rootScope) {
                setupTableService.getInitialTable(2, 3).then(function(response) {
                }, function (responseError) {
                    expect(responseError).toEqual('error');
                    done();
                });

                $rootScope.$digest();
            });
        });
    });
});