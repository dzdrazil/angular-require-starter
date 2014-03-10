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
     *
     * @class HomeController
     */
    homeModule.controller(
        'HomeController',
        /**
         * Home Controller Constructor
         *
         * @constructor
         * @param {Angular.$log} $log Angular's wrapper for window.console.log
         * @param {Angular.$scope} $scope Child scope instantiated for the constructor
         */
        function($scope, $log) {
            $log.info('application is running!');

            /**
             * someMethod
             * @param  {Object} a test description
             * @param  {Array<String>} b test
             * @return {Date}
             */
            $scope.someMethod = function(a, b) {
                $log('test', a, b);
            };
        }
    );

});
