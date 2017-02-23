module.exports = {
    compile: {
        files: {
            '<%= package.base + package.csspath %>compiled.css': [
                'bower_components/bootstrap/dist/css/bootstrap.css',
                'compiled-css/main.css'
            ]
        }
    },
    options: {
        compile: true,
        compress: false
    }
}