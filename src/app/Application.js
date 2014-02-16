define(function(require) {
    'use strict';

    var ng = require('angular');

    require('./modules/home/index');

    ng.module('app', [
        'app.home'
    ]);
});
