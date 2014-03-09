module.exports = {
    dist: {
        unixNewlines: true,
        files: [{
            src: ['scss/*.scss'],
            dest: '../www/css/screen.css',
            ext: '.css'
        }]
    }
};
