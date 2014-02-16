/**
 * @fileOverview  Module files are containers for directives and controllers that are specific to sections or components
 *                of the application.
 *                Routes can also be defined in module files, if the module represents a top-level view that should
 *                integrate with ng-view for handling route changes.
 */

define(/** @lends HomeModule */function(require) {
    'use strict';

    var ng = require('angular');
    require('angular-route');

    /**
     * @requires HomeController
     */
    var homeControllerTemplate = require('text!./HomeControllerTemplate.html');

    /**
     * @namespace {ng.Module} HomeModule
     */
    var homeModule = ng.module('app.home', [
        'ngRoute'
    ]);

    homeModule.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                template: homeControllerTemplate,
                controller: 'HomeController'
            });
    });

    return homeModule;
});
