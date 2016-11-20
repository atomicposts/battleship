describe('Setup Table Proxy', function () {

    var httpBackend, setupTableProxy;

    beforeEach(module('battleShip'));

    beforeEach(inject(function (SetupTableProxy, $injector) {
        setupTableProxy = SetupTableProxy;
        httpBackend = $injector.get('$httpBackend');
    }));

    describe('function to getTable', function () {

        it('should call service and return results', function (done) {

            httpBackend.whenGET('/table.json').respond(200, 'ok' );
            setupTableProxy.getTable(2,3).then(function (responseData) {
                expect(responseData).toEqual('ok');
                done();
            });

            httpBackend.flush();
        });

        it('should call service and return error', function (done) {
            httpBackend.expectGET('/table.json').respond(404);
            setupTableProxy.getTable(2,3).then(function () {
            }, function (responseError) {
                expect(responseError.errorCode).toEqual(404);
                done();
            });

            httpBackend.flush();
        });

    });

});

