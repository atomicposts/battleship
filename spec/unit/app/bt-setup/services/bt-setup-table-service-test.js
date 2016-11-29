describe('Setup Table Service test', function () {

    var setupTableService;

    var fakeSetupTableGetService = {
        getTable: jasmine.createSpy()
    };

    var fakeSetupTableTransformer = {
        transform: jasmine.createSpy()
    };

    beforeEach(module('battleShip'));

    beforeEach(module(function ($provide) {
        $provide.value('SetupTableGetService', fakeSetupTableGetService);
        $provide.value('SetupTableTransformer', fakeSetupTableTransformer);
    }));

    beforeEach(inject(function (SetupTableService) {
        setupTableService = SetupTableService;
    }));

    describe('when SetupTableGetTable resolves the promise', function () {

        beforeEach(inject(function ($q) {
            fakeSetupTableGetService.getTable = jasmine.createSpy('getTable').and.callFake(function () {
                var deferred = $q.defer ();
                var response = deferred.promise;

                deferred.resolve('demo');
                return response;
            });

            fakeSetupTableTransformer.transform = jasmine.createSpy('transform').and.callFake(function () {
                return 'ok';
            });
        }));

        it('getInitialTable should be called and result should be returned transformed', function (done) {
            inject(function($rootScope) {
                setupTableService.getInitialTable(2, 3).then(function (responseData) {
                    expect(responseData).toEqual('ok');
                    done();
                });
                $rootScope.$digest(); // To make a digest cycle
            });
        });

        it('getTable should be called, and result should be returned', function (done) {
            inject(function($rootScope) {
                setupTableService.getInitialTable(2, 3).then(function (responseData) {
                    var result = setupTableService.getTable();
                    expect(result).toEqual('ok');
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