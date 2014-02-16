/**
 * bootstraps angular onto the window.document node
 * NOTE: the ng-app attribute should not be on the index.html when using ng.bootstrap
 */
define([
    'angular',
    'Application'
], function (ng) {
    'use strict';

    ng.bootstrap(document, ['app']);
});
