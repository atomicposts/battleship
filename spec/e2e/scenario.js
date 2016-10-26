describe('Given a start view tha has a single button', function () {
    describe('when the button is pushed', function () {
        var startView = element(by.css('#startView'))
        var setupView = element(by.css('#setupView'))

        beforeEach(function () {
            browser.get('/');
            expect(startView.isPresent().toBeTruthy());
        });
    });
})