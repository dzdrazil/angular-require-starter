/**
 * bootstraps angular onto the window.document node
 * NOTE: the ng-app attribute should not be on the index.html when using ng.bootstrap
 */
require([
    'angular',
    'modules/main/index'
], function (ng) {
    'use strict';

    ng.bootstrap(document, ['app']);
});
