module.exports = {
    test: {
        options: {
            reporter: 'XUnit'
        },
        src: ['<%= package.directory %>/**/*.html'],
        dest: 'test/xunit.out'
    }
}