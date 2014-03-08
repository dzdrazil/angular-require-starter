define(function(require) {
    'use strict';

    var ng = require('angular');

    require('./modules/home/HomeModule');

    ng.module('app', [
        'app.home'
    ]);
});
