// Karma configuration
module.exports = function(config) {
    'use strict';

    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '',


        // frameworks to use
        frameworks: ['jasmine', 'requirejs'],


        // list of files / patterns to load in the browser
        files: [
            'tests/karma-main.js',
            'lib-thirdparty/angular/angular.js',
            'lib-thirdparty/angular-mocks/angular-mocks.js',
            'app/requireConfigSettings.js',
            {pattern: 'lib-thirdparty/**/*.js', included: false},
            {pattern: 'tests/**/*.js', included: false},
            {pattern: 'app/**/*.js', included: false},
            {pattern: 'app/**/*.html', included: false}
        ],

        preprocessors: {
            'app/**/*.js': ['coverage']
        },

        coverageReporter: {
            type : 'html',
            dir : '../build-reports/code-coverage/'
        },

        // list of files to exclude
        exclude: [

        ],


        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['coverage', 'dots'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR ||
        //                  config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: ['PhantomJS'],


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,
    });
};
