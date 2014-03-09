/**
 * RequireJS Grunt Task
 *
 * Available tasks:
 *   - vendor
 *   - dev
 *   - prod
 *
 * ### vendor
 *
 * The vendor task builds a minified file of common vendor dependencies.  It'd be great to not have to
 * manually define the vendor files in the VENDOR_FILES variable, but for the time being this will suffice.
 *
 * ### dev
 *
 * This task builds an unminified, concatenated file of the main application, excluding all of the vendor files.
 * This setup assumes that the build is a single page application, whereas applications that require multiple
 * build files for multiple pages should instead follow a naming convention that reflects the application / page
 * naming convention
 *
 * ### prod
 *
 * Same as the dev build, only minified.
 */

var VENDOR_FILES = [
    'angular',
    'angular-route',
    'angular-bindonce',
    'text'
];

module.exports = {
    options: {
        baseUrl: 'app',
        mainConfigFile: 'app/requireConfigSettings.js',
        keepBuildDir: false,
        skipDirOptimize: true,
        normalizeDirDefines: 'skip',
        removeCombined: true
    },
    vendor: {
        options: {
            optimize: 'uglify',
            name: 'vendor',
            create: true,
            include: VENDOR_FILES,
            out: '../www/assets/js/vendor.js'
        }
    },
    dev: {
        options: {
            optimize: 'none',
            name: 'bootstrap',
            exclude: VENDOR_FILES,
            out: '../www/assets/js/main.js'
        }
    },
    prod: {
        options: {
            optimize: 'uglify',
            name: 'bootstrap',
            exclude: VENDOR_FILES,
            out: '../www/assets/js/main.js',
            onBuildRead: function (moduleName, path, contents) {
               return require('ng-annotate')(contents, {add: true}).src;
            }
        }
    }
};
