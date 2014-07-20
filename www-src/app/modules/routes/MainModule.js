/**
 * Routes Main Module
 *
 * ### Application root
 *
 * The MainModule is the primary namespace for the core application routes.
 *
 * Each module that responds to the URL hash change belongs as a child module of Main.  The goal of this structure
 * is to define how the primary application 'sections' or templates respond to the URL hash changes and routing
 * structure.  MainModule, therefore, should remain relatively simple, as it need only require and register its
 * child modules, as well as any sibling modules (which are primarily directives and global services).
 *
 * ### Configuration
 *
 * Each module within the Main hierarchy is responsible for informing angular of the routes that it handles. MainModule
 * does not normally need to perform any route configuraiton, as it is only responsible for binding together the
 * specialized child modules.  However, it may be necessary to configure providers, such as adding domains to Angular's
 * $sce whitelist or other tasks.  If there isn't a specialized child module (or sibling module) for which it makes
 * sense to own responsibility for a particular domain, you can whitelist those domains in MainModule as the primary
 * application owner.
 *
 * ### Run Blocks
 *
 * Angular module run blocks are executed after everything else, including depencency injection setup, has occured.
 * They are difficult to unit test, and so should be kept as light and isolated as possible.
 *
 * @see [Angular Modules](http://docs.angularjs.org/guide/module)
 */
define(function(require) {
    'use strict';

    var angular = require('angular');

    /**
     * @requires HomeModule
     */
    require('./home/index');

    angular.module('app', [
        'app.home'
    ]);
});
