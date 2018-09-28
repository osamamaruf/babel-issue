module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        src: 'src',
        buildMainDir: 'build/es5-bundled',

        crisper: {
            dist: {
                options: {
                    scriptInHead: false
                },

                files: [{
                    expand: true,
                    src: ['<%= buildMainDir %>/src/components/**/*.html', '<%= buildMainDir %>/index.html']
                }]


            }
        },
        exec: {
            polymer_build: 'npm run build'
        },
    });

    grunt.loadNpmTasks('grunt-crisper');
    grunt.loadNpmTasks('grunt-exec');

    grunt.registerTask('develop', ['exec', 'crisper:dist']);
};