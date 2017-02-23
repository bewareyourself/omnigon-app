module.exports = {
    assets: {
        nonull: true,
        files: [
            {
                src: "**",
                dest: "<%= package.base %>assets/img",
                cwd: 'files/img',
                expand: true
            }
        ]
    }
};