/**
 * Plato Grunt Task
 *
 * ### Static analysis
 *
 * The plato grunt task runs the Plato code analysis tool over the application files, and generates an HTML
 * report at the specified location.  This is useful for keeping an eye on complexity and maintainability, although
 * because it maintains a history of each run, it should be archived and started fresh on each sprint or feature to
 * ease the load time and file size.
 *
 * ### CI server integration
 *
 * Because Plato creates HTML reports, the karma complexity reporter should be used instead when integrating
 * with a CI server such as Bamboo or Jenkins.
 */

module.exports = function(grunt) {
    'use strict';

    return {
        main: {
            options: {
                jshint: grunt.file.readJSON('.jshintrc')
            },
            files: {
                '../reports/plato': ['app/**/*.js']
            }
        }
    };
};
