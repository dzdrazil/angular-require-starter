/**
 * another one monkey patch to prevent "no timestamp" error
 * https://github.com/karma-runner/karma-requirejs/issues/6#issuecomment-23037725
 */
(function (global) {
    'use strict';

    var fileWithoutLeadingSlash;
    // array where all spec files will be included
    global.tests = [];

    for (var file in global.__karma__.files) {
        if (global.__karma__.files.hasOwnProperty(file)) {
            // get rid of leading slash in file path - prevents "no timestamp" error
            fileWithoutLeadingSlash = file.replace(/^\//, '');
            global.__karma__.files[fileWithoutLeadingSlash] = global.__karma__.files[file];
            delete global.__karma__.files[file];

            // we get all the test files automatically and store to window.tests array
            if (/\.spec\.js$/.test(fileWithoutLeadingSlash)) {
                global.tests.push(fileWithoutLeadingSlash);
            }
        }
    }
})(this);

require.config(REQUIRE_CONFIG);

// karma settings
require.config({
    // karma serves files from "base"
    baseUrl: 'base/',
    // array with all spec files
    deps: window.tests,
    // start testing
    callback: window.__karma__.start
});
