module.exports = {
    dev: {
        options: {
            mangle: false,
        },
        files: {
            '../www/assets/js/require.js': 'vendor/requirejs/require.js',
            '../www/assets/js/requireConfig.js': 'app/requireConfigSettings.js'
        }
    }
};
