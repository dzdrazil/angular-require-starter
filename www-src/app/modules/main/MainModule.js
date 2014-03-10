/**
 * Main Module
 *
 * ### Application root
 *
 * The MainModule is the primary namespace for the core application module.
 *
 * Each module that responds to the URL hash change belongs as a child module of Main.  The goal of this structure
 * is to define how the primary application 'sections' or templates respond to the URL hash changes and routing
 * structure.  MainModule, therefore, should remain relatively simple, as it need only require and register its
 * child modules, as well as any sibling modules (which are primarily directives and global services).
 *
 * Each module should have an index.js file, which requires (but does not need to utilize or assign) all of the files
 * within the module folder except for the *Module file itself- all other files will need to require it.  This way,
 * it will be possible for two modules to depend on each other without introducing circular dependencies into
 * require.js
 *
 * To require a module, simply:
 *
 * ```javascript
 * require('childModuleFolder/index');
 * ```
 * and add it to the module definition:
 *
 * ```javascript
 * angular.module('namespace', [
 *     // insert the string name defined by the child module required above
 *     'childModule'
 * ]);
 * ```
 *
 * and every file that registers itself with Angular will be available via Angular's dependency injection.
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
