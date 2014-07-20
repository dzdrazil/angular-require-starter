/**
 * bootstraps angular onto the window.document node
 * NOTE: the ng-app attribute should not be on the index.html when using ng.bootstrap
 */
require([
    'angular',
    'modules/routes/index'
], function (ng) {
    'use strict';

    var ApplicationModule = angular.module('app', [
        'routes'
    ]);

    // Application-wide configuration, including route handling, modifying $http's behavior, etc
    // can go here
    // ApplicationModule.config(function() {
    // });

    // Application run behavior
    // See the angular doc's module section
    // ApplicationModule.run(function() {
    // });

    ng.bootstrap(document, ['app']);
});
