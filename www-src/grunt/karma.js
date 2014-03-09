/**
 * Karma Unit testing Grunt task
 *
 * ### Unit testing
 *
 * Karma stands up a server, as defined by the karma.conf.js file, and utilizes a browser integration library
 * to run the unit tests for the application.  For feature, integration or e2e testing, prefer Protractor or
 * plain Selenium to perform those tasks instead, as
 */

module.exports = {
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
};
