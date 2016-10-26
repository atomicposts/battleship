describe('Given a start view tha has a single button', function () {
    describe('when the button is pushed', function () {
        var startView = element(by.css('#startView'))
        var setupView = element(by.css('#setupView'))

        beforeEach(function () {
            browser.get('/');
            expect(startView.isPresent()).toBeTruthy();
            var buttonToStart = element(by.linkText('Start game'));
            buttonToStart.click();
        });

        it('should be switched setupView',function(){
            expect(setupView.isPresent()).toBeTruthy();
        })
        it('should not display startView',function(){
            expect(startView.isPresent()).toBeFalsy();
        })

    });
})