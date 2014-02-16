(function(ns) {
    'use strict';

    // If window is a variable, assign the config to it
    // Especially helpful for not duplicating the config in the karma test runner, but it may not be available if pulled
    // in via the minification configuration
    var namespace = ns || {};

    namespace.REQUIRE_CONFIG = {
        // alias paths for library modules
        paths: {
            angular: '../lvendor/angular/angular',
            'angular-route': '../lvendor/angular-route/angular-route',
            'angular-bindonce': '../lvendor/angular-bindonce/bindonce',
        },

        // shim settings for files that are not AMD compliant
        // this tells require.js how to handle non-modular files
        angular: {
            exports: 'angular'/*,
            // only use jquery if you have an absolute need to do so
            // don't forget to add it to bower and the paths config above
            deps: ['jquery'] */
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-bindonce': {
            deps: ['angular']
        },
    };

    return namespace.ns;

})(window);
