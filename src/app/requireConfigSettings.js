require.config({
    baseUrl: 'app',
    // alias paths for library modules
    paths: {
        angular: '../vendor/angular/angular',
        'angular-route': '../vendor/angular-route/angular-route',
        'angular-bindonce': '../vendor/angular-bindonce/bindonce',
        text: '../vendor/requirejs-text/text'
    },

    // shim settings for files that are not AMD compliant
    // this tells require.js how to handle non-modular files
    shim: {
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
        }
    }
});
