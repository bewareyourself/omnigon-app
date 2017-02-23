module.exports = {
    compile:{
        src:[
            'bower_components/jquery/dist/jquery.js',
            'bower_components/svg4everybody/dist/svg4everybody.js',
            'compiled-js/coffee.js'
        ],
        dest:'<%= package.base + package.jspath %>compiled.js'
    }
};