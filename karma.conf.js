// Karma configuration
// Generated on Sat Oct 22 2016 11:54:56 GMT+0200 (CEST)

module.exports = function(config) {
    config.set({

        preprocessors: {
            '**/*.html': ['ng-html2js']
        },

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',

        plugins : ['karma-jasmine', 'karma-phantomjs-launcher', 'karma-ng-html2js-preprocessor'],

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'app/**/*.js',
            'spec/**/*.js',
            '**/*.html'
        ],

        // web server port
        port: 8000,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        ngHtml2JsPreprocessor: {
            moduleName: 'templates'
        },

        client: {
            captureConsole: true
        }
    })
}
