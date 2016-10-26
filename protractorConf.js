exports.config = {
    capabilities: {
        'browserName': 'firefox'
    },
    baseUrl: 'http://localhost:8000/',
    specs: ['spec/e2e/**/*.js'],
};