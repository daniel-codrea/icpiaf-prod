module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
        assemble: {
            files: [
                'app/content/blog/*.hbs',
                'app/content/pages/*.hbs',
                'app/layouts/*.hbs',
                'app/partials/*.hbs'
            ],
            tasks: ['assemble']
        },
        livereload: {
          options: {
            livereload: '<%= connect.options.livereload %>'
          },
          files: [
            './dist/*.html'
          ]
        },
    },
    assemble: {
        options:{
            layoutdir: 'app/layouts',
            flatten: true,
            layout: 'default.hbs',
            partials: 'app/partials/*.hbs',
            helpers: ['helper-moment']
        },
        page: {
            files: {
                'dist/': ['app/content/page/*.hbs']
            }
        },
        blog: {
            files: {
                'dist/': ['app/content/blog/*.hbs']
            }
        }
    },
    connect: {
      options: {
        port: 8800,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost',
        livereload: 35728
      },
      livereload: {
        options: {
          open: true,
          base: './dist'
        }
      }
    }
  });

    grunt.loadNpmTasks('grunt-assemble');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['connect:livereload','assemble','watch']);
};
