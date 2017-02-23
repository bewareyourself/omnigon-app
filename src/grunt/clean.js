module.exports = {
    bower: ['bower_components/*'],
    js: ['<%= package.base + package.jspath %>*.js', '!<%= package.base + package.jspath %>*.min.js'],
    css: ['<%= package.base + package.csspath %>*.css', '!<%= package.base + package.csspath %>*.min.css'],
    svg: ['files/svg-final', 'jade/svg.html'],
    coffee: ['compiled-js'],
    stylus: ['compiled-css'],
    options: { force: true }
};