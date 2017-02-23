module.exports = {
    clean: {
        src: [
            '<%= package.base + package.jspath %>compiled.js'
        ],
        dest: '<%= package.base + package.jspath %>compiled.min.js'
    }
}