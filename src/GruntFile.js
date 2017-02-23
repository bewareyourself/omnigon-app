module.exports = function(grunt) {
    var gtx = require('gruntfile-gtx').wrap(grunt);

    gtx.loadAuto();

    var gruntConfig = require('./grunt');
    gruntConfig.package = require('./package.json');

    gtx.config(gruntConfig);

    gtx.alias('build:base', [
        'clean:bower',
        'bower-install-simple:prod',
        'copy:assets',
        'imagemin:images',
        'coffee:compile',
        'concat:compile',
        'removelogging:clean',
        'clean:coffee',
        'uglify:clean',
        'clean:js',
        'stylus:dist',
        'recess:compile',
        'clean:stylus',
        'postcss:compile',
        'clean:css',
        'svg_sprite:generate',
        'svgcombine:inject',
        'jade:prod',
        'clean:svg',
        'htmlclean:index'
    ]);


    gtx.alias('build:html', [
        'copy:assets',
        'imagemin:images',
        'svg_sprite:generate',
        'svgcombine:inject',
        'jade:dev',
        'clean:svg',
        'htmlclean:index'
    ]);

    gtx.alias('build:css', [
        'copy:assets',
        'imagemin:images',
        'stylus:dist',
        'recess:compile',
        'clean:stylus',
        'postcss:compile',
        'clean:css'
    ]);

    gtx.alias('build:js', [
        'copy:assets',
        'imagemin:images',
        'coffee:compile',
        'concat:compile',
        'clean:coffee',
        'uglify:clean',
        'clean:js'
    ]);

    gtx.finalise();
}


