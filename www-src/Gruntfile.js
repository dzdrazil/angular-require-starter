module.exports = function(grunt) {
    'use strict';

    var path = require('path');

    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt'), //path to task.js files, defaults to grunt dir
        init: true, //auto grunt.initConfig
        //can optionally pass options to load-grunt-tasks.  If you set to false, it will disable auto loading tasks.
        loadGruntTasks: {
            config: require('./package.json'),
            scope: 'devDependencies'
        }
    });
};
