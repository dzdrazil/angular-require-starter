define(/** @lends HomeController */function(require) {
    'use strict';

    var homeModule = require('./HomeModule');

    homeModule.controller(
        'HomeController',
        /**
         * @constructor
         * @param {$log} Angular's wrapper for window.console.log
         */
        function($log) {
            $log.info('application is running!');
        }
    );

});
