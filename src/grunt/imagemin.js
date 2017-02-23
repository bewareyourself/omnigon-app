module.exports = {
    images: {
        options: {
            optimizationLevel: 9
        },
        files: [{
            expand: true,
            cwd: 'files/img',
            src: ['**/*.{png,jpg,gif}'],
            dest: "<%= package.base %>assets/img",
        }]
    }
};