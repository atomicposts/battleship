describe('Setup Table Proxy', function () {

    var httpBackend, setupTableProxy, rootScope;

    beforeEach(module('battleShip'));

    beforeEach(inject(function (SetupTableProxy, $injector, $rootScope) {
        setupTableProxy = SetupTableProxy;
        httpBackend = $injector.get('$httpBackend');
        rootScope = $rootScope;
    }));

    describe('function to getTable', function () {
        var width = 10;
        var height = 10;

        it('should call service and return results', function (done) {
            httpBackend.whenGET('http://localhost:3000/board/rows/' + width + '/columns/' + height).respond(200, 'ok' );
            setupTableProxy.getTable(10,10).then(function (responseData) {
                expect(responseData).toEqual('ok');
                done();
            });
            rootScope.$digest();
            httpBackend.flush();
        });

        it('should call service and return error', function (done) {
            httpBackend.expectGET('http://localhost:3000/board/rows/' + width + '/columns/' + height).respond(404);
            setupTableProxy.getTable(10,10).then(function () {
            }, function (responseError) {
                expect(responseError.errorCode).toEqual(404);
                done();
            });
            rootScope.$digest();
            httpBackend.flush();
        });

    });

});

