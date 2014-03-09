define(function(require) {
    'use strict';

    var homeModule = require('./HomeModule');

    /**
     * Home Module Controller
     *
     * ### Index Page
     *
     * The HomeController is responsible for responding to the '/' route, as defined in HomeModule.
     *
     * At this point, it doesn't do very much- it only logs out 'application is running!' through the cross-browser
     * safe $log services.
     */

    homeModule.controller(
        'HomeController',
        /**
         * @constructor
         * @param {$log} Angular's wrapper for window.console.log
         */
        function($log) {
console.log('home controller loaded');
            $log.info('application is running!');
        }
    );

});
