define(function(require) {
    'use strict';

    var ng = require('angular');
    require('angular-route');

    /**
     * Home Module
     *
     * ### Overview
     *
     * This is a long-form description of the home module.  Here, things such as the available controllers, directives,
     * routes, services, filters and so forth should be documented.  Generally speaking, these kinds of modules should
     * only include controllers, templates and routes.  Specialized directives are also okay, although it's usually
     * better to write directives that are reusable, rather than highly specialized ones.
     *
     * Services are also okay, but exposing them to other modules can be tricky, especially if it requires two modules
     * to depend on each other.  Since services are typically meant to share state between components (they are
     * singletons after all) it's best to give special care to their design, and extrapolate them into a services
     * sub-module or stand-alone module.  In doing so, services can be readily shared between modules so long as
     * developers take care and understand the consequences that the coupling can create.
     *
     * @name app.home
     */
    var homeModule = ng.module('app.home', [
        'ngRoute'
    ]);

    /**
     * @requires HomeController
     */
    var homeControllerTemplate = require('text!./HomeControllerTemplate.html');
    require('./HomeController')(homeModule);


    /**
     * Home module configuration
     *
     * ### Routes
     *
     * The home module utilizes the following routes:
     *
     *  - '/'
     *    - Controller: HomeController.js
     *    - Template: HomeControllerTemplate.html
     *
     */
    homeModule.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                template: homeControllerTemplate,
                controller: 'HomeController'
            });
    });

    return homeModule;
});
