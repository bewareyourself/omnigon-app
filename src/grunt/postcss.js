module.exports = {
    options: {
        processors: [
            require('pixrem')(),
            require('postcss-import')(),
            require('css-mqpacker')(),
            require('cssnano')({discardComments: { removeAll: true}})
        ]
    },
    compile: {
        src: '<%= package.base + package.csspath %>compiled.css',
        dest: '<%= package.base + package.csspath %>compiled.min.css'
    }
}

