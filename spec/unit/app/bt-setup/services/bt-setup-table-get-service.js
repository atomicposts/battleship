describe('Setup Table Get Service test', function () {

    var setupTableGetService;
    var mockResponse = 'promise';
    var fakeSetupTableProxy = {
        getTable: jasmine.createSpy()
    };

    beforeEach(module('battleShip'));

    beforeEach(module(function ($provide) {
        $provide.value('SetupTableProxy', fakeSetupTableProxy);
    }));

    beforeEach(inject(function (SetupTableGetService) {
        setupTableGetService = SetupTableGetService;
    }));

    describe('when SetupTableProxy resolves the promise', function () {
        beforeEach(inject(function ($q) {
            fakeSetupTableProxy.getTable = jasmine.createSpy('getTable').and.callFake(function () {
                var deferred = $q.defer ();
                var response = deferred.promise;

                deferred.resolve(mockResponse);
                return response;
            });
        }));

        it('result should be returned', function (done) {
            inject(function($rootScope) {
                setupTableGetService.getTable().then(function (responseData) {
                    expect(responseData).toEqual('promise');
                    done();
                });
                $rootScope.$digest(); // To make a digest cycle
            });

        })
    });

    describe('when SetupTableProxy rejects the promise', function () {
        beforeEach(inject(function ($q) {
            fakeSetupTableProxy.getTable = jasmine.createSpy('getTable').and.callFake(function () {
                var deferred = $q.defer ();
                var response = deferred.promise;

                deferred.reject('error');
                return response;
            });
        }));

        it('result should be an error', function (done) {
            inject(function ($rootScope) {
                setupTableGetService.getTable().then(function(response) {
                }, function (responseError) {
                    expect(responseError).toEqual('error');
                    done();
                });

                $rootScope.$digest();
            });
        })
    })

});