module.exports = {
    // produce the vendor files: require.js and vendor.js
    'build:vendor': [
        'uglify',
        'requirejs:vendor'
    ],

    // produce an unminified application build file
    'build:dev': [
        'requirejs:dev'
    ],

    'build:prod': [
       // 'sass',
        'build:vendor',
        'requirejs:prod'
    ],

    // default task
    default: [
        'karma'
    ]
};
