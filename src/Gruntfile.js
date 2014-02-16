module.exports = function (grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // SASS minification settings
        sass: {
            dist: {
                unixNewlines: true,
                files: [{
                    src: ['scss/*.scss'],
                    dest: '../www/css/screen.css',
                    ext: '.css'
                }]
            }
        },

        // move requirejs to the appropriate location
        uglify: {
            dev: {
                options: {
                    mangle: false,
                },
                files: {
                    '../www/js/require.js': 'vendor/requirejs/require.js'
                }
            }
        },
        // unit testing
        karma: {
            // perform a single run
            unit: {
                autoWatch: false,
                configFile: 'karma.conf.js',
                singleRun : true,
                browsers  : ['PhantomJS']
            }
            // uncomment only if you're the kind of developer to use watch tasks
            /* ,
            watch: { // used in grunt watch context
                background: true,
                configFile: 'karma.conf.js',
                singleRun: false,
                browsers  : ['PhantomJS']
            }*/
        },

        // javascript file minification settings
        requirejs: {
            configCompile: {
                options: {
                    // Note: all paths are relative to build.js
                    baseUrl: './',
                    name: 'app/requireConfigSettings', // Input script (.js extension inferred)
                    out: '../www/js/requireConfigSettings.js', // Path for combined script output

                    // fileExclusionRegExp: /.svn/, // Ignore all files matching this pattern
                    //useStrict: true,

                    optimize: 'none'
                }
            },
            dev: {
                options: {
                    baseUrl: 'app',
                    name: 'bootstrap',
                    out: '../www/js/bootstrap.js',
                    mainConfigFile: 'app/requireConfigSettings.js',
                    optimize: 'none'
                }
            },
            compile: {
                options: {
                    // Note: all paths are relative to build.js
                    baseUrl: 'app',
                    name: 'bootstrap', // Input script (.js extension inferred)
                    out: '../www/js/bootstrap.js', // Path for combined script output

                    //fileExclusionRegExp: /.svn/, // Ignore all files matching this pattern
                    //useStrict: true,

                    mainConfigFile: 'app/requireConfigSettings.js',

                    optimize: 'uglify',

                    uglify: {
                        toplevel: false,
                        beautify: false,
                        'ascii_only': true
                    },

                    /**
                     * Override any paths here that can't be minified, such as the CDN google maps reference
                     * if it's included in the application
                     *
                     * use the "empty:" string to tell the minifier to ignore it- the : is not a typo
                     */
                    // paths: {
                    //     googlemaps: 'empty:',
                    // },

                    // annotate any angular files whose injection requirements can be inferred
                    // doesn't work if you pass in a name reference rather than an anonymous function
                    onBuildRead: function (moduleName, path, contents) {
                        return require('ng-annotate')(contents, {add: true}).src;
                    }
                }
            }
        },

        // static analysis reporting- code health metrics
        plato: {
            main: {
                options: {
                    jshint: grunt.file.readJSON('.jshintrc')
                },
                files: {
                    '../build-reports/plato': ['app/**/*.js']
                }
            }
        },

        // auto-generated documentation; especially useful for libraries and reusable components
        jsdoc : {
            dist : {
                src: ['app/**/*.js'],
                options: {
                    destination: '../build-reports/jsdoc'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-plato');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-jsdoc');

    // Default task(s).
    grunt.registerTask('default', ['karma:unit']);

    // sass tasks
    grunt.registerTask('build:sass', ['sass']);

    // js tasks
    grunt.registerTask('build:js:dev', ['requirejs:configCompile', 'requirejs:dev']);
    grunt.registerTask('build:js', ['requirejs:configCompile', 'requirejs:compile']);

    grunt.registerTask('build:dev', [
        'uglify',
        'karma:unit',
        'build:sass',
        'build:js:dev'
    ]);

    grunt.registerTask('build', [
        'uglify',
        'karma:unit',
        'plato',
        'jsdoc',
        'build:sass',
        'build:js'
    ]);
};
